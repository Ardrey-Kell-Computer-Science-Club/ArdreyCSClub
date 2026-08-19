"use client";

import { Search, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";

const topicGroups = [
  ["Languages", ["Python","Java","JavaScript","TypeScript","C","C++","C#","Go","Rust","Swift","Kotlin","Ruby","PHP","Dart","Bash","Assembly"]],
  ["Web Development", ["HTML","CSS","React","Next.js","Vue","Angular","Svelte","Node.js","Express","Tailwind CSS","Vite","REST APIs","GraphQL","WebSockets"]],
  ["Databases", ["SQL","PostgreSQL","MySQL","SQLite","MongoDB","Redis","Supabase","Firebase","Prisma"]],
  ["DevOps + Cloud", ["Docker","Kubernetes","AWS","Microsoft Azure","Google Cloud","Cloudflare","Vercel","GitHub Actions","CI/CD","Terraform","Nginx","Containers"]],
  ["Developer Tools", ["Git","GitHub","VS Code","Vim","Neovim","Terminal","npm","pnpm","Postman","GitHub CLI"]],
  ["Operating Systems", ["Linux","Ubuntu","Windows","macOS","Unix"]],
  ["CS Fundamentals", ["Data Structures","Algorithms","Big O","Recursion","Sorting","Searching","Trees","Graphs","Hash Maps","Stacks","Queues","Dynamic Programming","Object-Oriented Programming"]],
  ["AI + Machine Learning", ["Artificial Intelligence","Machine Learning","Deep Learning","Neural Networks","Computer Vision","Natural Language Processing","Transformers","LLMs","AI Agents","PyTorch","TensorFlow","Hugging Face"]],
  ["Cybersecurity", ["Ethical Hacking","Cryptography","Network Security","Web Security","Penetration Testing","Authentication","OAuth","JWT","Firewalls","CTF","OWASP","Kali Linux"]],
  ["Networking", ["TCP/IP","HTTP","HTTPS","DNS","SSH","VPN","Routers","Servers","Ports","Client/Server Architecture"]],
  ["Hardware + Robotics", ["CPU","GPU","RAM","SSD","Raspberry Pi","Arduino","Embedded Systems","Microcontrollers","Robotics","IoT","Computer Vision Robotics"]],
  ["Mobile + Games", ["React Native","Expo","SwiftUI","iOS","Android","Flutter","Unity","Unreal Engine","Godot","Pygame","Blender"]],
  ["Software Engineering", ["Frontend","Backend","Full Stack","APIs","Microservices","System Design","Software Architecture","Testing","Open Source","Agile","Scrum"]],
  ["Future CS", ["Blockchain","Smart Contracts","Distributed Systems","Cloud Computing","Quantum Computing","Computer Graphics","Compilers","Operating Systems","Human-Computer Interaction","AR/VR","Autonomous Vehicles","Bioinformatics"]],
  ["Competitions", ["USACO","ACSL","Congressional App Challenge","CyberPatriot","picoCTF","Hackathons"]],
] as const;

const topics = topicGroups.flatMap(([category, names]) => names.map((name) => ({ name, category })));

function makePositions() {
  return topics.map((_, index) => {
    const angle = index * 2.399963;
    const radius = 7 + Math.sqrt(index / topics.length) * 43;
    return {
      x: 50 + Math.cos(angle) * radius * 1.08,
      y: 50 + Math.sin(angle) * radius,
    };
  });
}

const connections = topicGroups.flatMap(([, names], groupIndex) => {
  const start = topicGroups.slice(0, groupIndex).reduce((sum, [, group]) => sum + group.length, 0);
  return names.slice(1).map((_, index) => [start + index, start + index + 1] as const);
});

export function CompetitionMap() {
  const fieldRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<number | null>(null);
  const [positions, setPositions] = useState(makePositions);
  const match = useMemo(() => {
    const clean = query.trim().toLowerCase();
    if (!clean) return null;
    return topics.findIndex((topic) => (topic.name + " " + topic.category).toLowerCase().includes(clean));
  }, [query]);
  const active = match !== null && match >= 0 ? match : selected;
  const activeTopic = active !== null ? topics[active] : null;

  function startDrag(index: number, event: React.PointerEvent<HTMLButtonElement>) {
    const field = fieldRef.current;
    if (!field) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setSelected(index);
    const move = (moveEvent: PointerEvent) => {
      const bounds = field.getBoundingClientRect();
      const x = Math.min(97, Math.max(3, ((moveEvent.clientX - bounds.left) / bounds.width) * 100));
      const y = Math.min(95, Math.max(5, ((moveEvent.clientY - bounds.top) / bounds.height) * 100));
      setPositions((current) => current.map((position, itemIndex) => itemIndex === index ? { x, y } : position));
    };
    const stop = () => {
      event.currentTarget.removeEventListener("pointermove", move);
      event.currentTarget.removeEventListener("pointerup", stop);
    };
    event.currentTarget.addEventListener("pointermove", move);
    event.currentTarget.addEventListener("pointerup", stop);
  }

  return (
    <section className="competition-section" aria-labelledby="competition-title">
      <div className="competition-header">
        <div><p>Explore / learn / build</p><h2 id="competition-title">What do you want to learn?</h2></div>
        <p>Search more than 150 technologies and computer science topics. Select or drag a node to explore how the field connects.</p>
      </div>
      <div className="competition-search">
        <Search aria-hidden="true" />
        <label htmlFor="competition-query" className="sr-only">Search computer science topics</label>
        <input id="competition-query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Python, React, cybersecurity..." autoComplete="off" />
        {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear topic search"><X /></button>}
      </div>
      <div className="competition-field" ref={fieldRef}>
        <svg aria-hidden="true" viewBox="0 0 100 100" preserveAspectRatio="none">
          {connections.map(([from, to]) => <line key={from + "-" + to} x1={positions[from].x} y1={positions[from].y} x2={positions[to].x} y2={positions[to].y} />)}
          {topicGroups.slice(1).map((_, index) => {
            const from = topicGroups.slice(0, index + 1).reduce((sum, [, group]) => sum + group.length, 0);
            const to = from + topicGroups[index + 1][1].length;
            return <line key={"group-" + index} x1={positions[from - 1].x} y1={positions[from - 1].y} x2={positions[Math.min(to - 1, topics.length - 1)].x} y2={positions[Math.min(to - 1, topics.length - 1)].y} />;
          })}
        </svg>
        {topics.map((topic, index) => {
          const isActive = active === index;
          const isDimmed = query.trim() !== "" && match !== index;
          return <button key={topic.category + topic.name} type="button" className={"competition-node" + (isActive ? " is-active" : "") + (isDimmed ? " is-dimmed" : "")} style={{ left: positions[index].x + "%", top: positions[index].y + "%" }} onPointerDown={(event) => startDrag(index, event)} onClick={() => setSelected(index)} aria-pressed={isActive} aria-label={topic.name + ", " + topic.category + ". Drag to reposition or select for details."}>{topic.name}</button>;
        })}
        <div className="competition-center" aria-hidden="true"><span>AKCS</span></div>
      </div>
      <div className="competition-detail" aria-live="polite">
        {activeTopic ? <><span>{activeTopic.category}</span><strong>{activeTopic.name}</strong><span>Explore with AKCS</span></> : <><span>{topics.length} topics</span><strong>Search or select a technology</strong><span>Drag to explore</span></>}
      </div>
    </section>
  );
}
