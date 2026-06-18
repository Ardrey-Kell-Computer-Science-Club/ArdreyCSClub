import process from "node:process";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

// ADMIN_EMAIL is read from process.env where needed

// console.log(ADMIN_EMAIL, resend);

export async function POST(req: Request) {
	// flexible body parsing: try JSON, otherwise parse urlencoded form body
	let data: Record<string, unknown> = {};
	try {
		data = (await req.json()) as Record<string, unknown>;
	} catch (_e) {
		try {
			const text = await req.text();
			if (text?.includes("=")) {
				data = Object.fromEntries(new URLSearchParams(text).entries());
			} else {
				data = {};
			}
		} catch (_e2) {
			data = {};
		}
	}

	// accept both camelCase and lowercase keys from client-side forms
	const firstName = data.firstName ?? data.firstname ?? data.first_name ?? "";
	const lastName = data.lastName ?? data.lastname ?? data.last_name ?? "";
	const email = data.email ?? "";
	const grade = data.grade ?? data.schoolYear ?? "";
	const major = data.major ?? "";
	const experience = data.experience ?? "";
	const message = data.message ?? data.notes ?? "";
	const interestsRaw = data.interests ?? [];

	// basic email check
	const emailValid = typeof email === "string" && /^\S+@\S+\.\S+$/.test(email);
	if (!firstName || !lastName || !emailValid) {
		const received = Object.keys(data || {});
		return NextResponse.json(
			{
				error: "Missing or invalid required fields: firstName, lastName, email",
				receivedFields: received,
			},
			{ status: 400 },
		);
	}

	const interests = Array.isArray(interestsRaw)
		? interestsRaw
		: typeof interestsRaw === "string" && interestsRaw.length
			? interestsRaw
					.split(",")
					.map((s: string) => s.trim())
					.filter(Boolean)
			: [];

	const interestList = interests.length
		? interests.map((i: string) => `<li>${i}</li>`).join("")
		: "<li>None selected</li>";

	try {
		// Validate environment config
		const adminEmail = process.env.ADMIN_EMAIL;
		if (!adminEmail) {
			console.error("ADMIN_EMAIL not configured");
			return NextResponse.json(
				{ error: "Server not configured" },
				{ status: 500 },
			);
		}

		// Ensure email client is configured
		if (!resend) {
			console.error("RESEND_API_KEY not configured");
			return NextResponse.json(
				{ error: "Email provider not configured" },
				{ status: 500 },
			);
		}

		// Notify you (admin)
		await resend.emails.send({
			from: "CS Club <onboarding@resend.dev>",
			to: adminEmail,
			subject: `New interest form: ${firstName} ${lastName}`,
			html: `
        <h2>New Club Interest Submission</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:6px 12px;color:#666">Name</td><td style="padding:6px 12px"><strong>${firstName} ${lastName}</strong></td></tr>
          <tr><td style="padding:6px 12px;color:#666">Email</td><td style="padding:6px 12px"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:6px 12px;color:#666">Grade</td><td style="padding:6px 12px">${grade || "Not specified"}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">Major</td><td style="padding:6px 12px">${major || "Not specified"}</td></tr>
          <tr><td style="padding:6px 12px;color:#666">Experience</td><td style="padding:6px 12px">${experience || "Not specified"}</td></tr>
          <tr><td style="padding:6px 12px;color:#666;vertical-align:top">Interests</td><td style="padding:6px 12px"><ul style="margin:0;padding-left:16px">${interestList}</ul></td></tr>
          ${message ? `<tr><td style="padding:6px 12px;color:#666;vertical-align:top">Message</td><td style="padding:6px 12px">${message}</td></tr>` : ""}
        </table>
      `,
		});

		// Confirm to the applicant
		await resend.emails.send({
			from: "Ardrey Kell CS Club <onboarding@resend.dev>",
			to: email,
			subject: "You're on the Ardrey Kell CS Club interest list!",
			html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px">
          <h2 style="color:#7c3aed">Hey ${firstName}, you're in! 👾</h2>
          <p>Thanks for signing up for the Ardrey Kell CS Club interest list. We'll reach out soon with meeting times, events, and how to get involved.</p>
          <p style="color:#666;font-size:13px">You listed interest in: ${interests?.join(", ") || "general membership"}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0"/>
          <p style="color:#999;font-size:12px">Questions? Reply to this email or reach us at ${process.env.ADMIN_EMAIL}.</p>
        </div>
      `,
		});

		return NextResponse.json({ success: true });
	} catch (err) {
		console.error("Email error:", err);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 },
		);
	}
}
