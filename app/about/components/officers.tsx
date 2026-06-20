import { Card, CardContent } from "@/components/ui/card";

const officers = [
  {
    name: "Shivang Patel",
    role: "President",
  },
  {
    name: "Your Name",
    role: "Vice President",
  },
  {
    name: "Officer Name",
    role: "Secretary",
  },
  {
    name: "Officer Name",
    role: "Treasurer",
  },
];

export default function Officers() {
  return (
    <section className="bg-zinc-950/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Leadership Team
        </h2>
        <h3 className="mb-8 text-center text-2xl font-bold text-purple-400">
          Officer Position Forms Soon -&gt;
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {officers.map((officer) => (
            <Card key={officer.name} className="border-zinc-800 bg-black">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-purple-500/20" />

                <h3 className="text-lg font-semibold">{officer.name}</h3>

                <p className="text-purple-400">{officer.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
