"use client";
import type React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function SignupFormDemo() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    grade: "",
  });
  const [interests, setInterests] = useState<string[]>([]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const INTEREST_OPTIONS = [
    "Competitive Programming",
    "AI / ML",
    "Web Dev",
    "Cybersecurity",
    "Open Source Contributions",
    "Game Dev",
  ];

  const toggleInterest = (val: string) => {
    setInterests((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val],
    );
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, interests }),
      });

      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-purple-600 p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <div className="my-8 text-center text-white">
          <p className="text-2xl font-bold">You&apos;re on the list! 👾</p>
          <p className="mt-2 text-sm text-neutral-200">
            Thanks, {form.firstname}. We&apos;ll reach out to {form.email} soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-purple-600 p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <p className="text-xl font-bold text-white">Join the AK CS Club</p>
      <p className="mt-1 text-sm text-neutral-200">
        Fill out this interest form and we&apos;ll reach out with details.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Alex"
              type="text"
              value={form.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Johnson"
              type="text"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        {/* Email */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            placeholder="alex@school.edu"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {/* Just Grade Goes Here Nothing Else */}
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="grade">Grade / Year</Label>
            <select
              id="grade"
              value={form.grade}
              onChange={handleChange}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Select…</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
              <option>Graduate</option>
            </select>
          </LabelInputContainer>
        </div>

        {/* Interests */}
        <LabelInputContainer className="mb-4">
          <Label>Interests</Label>
          <div className="flex flex-wrap gap-2">
            {INTEREST_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => toggleInterest(opt)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-colors",
                  interests.includes(opt)
                    ? "border-white bg-white text-purple-700 font-semibold"
                    : "border-neutral-400 text-neutral-200 hover:border-white",
                )}
              >
                {opt}
              </button>
            ))}
          </div>
        </LabelInputContainer>

        <button
          type="submit"
          disabled={status === "loading"}
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:opacity-60 dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
        >
          {status === "loading" ? "Sending…" : "Submit interest form →"}
          <BottomGradient />
        </button>

        {status === "error" && (
          <p className="mt-3 text-center text-sm text-red-300">
            Something went wrong. Please try again.
          </p>
        )}

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
