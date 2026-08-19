import type { Metadata } from "next";
import { Welcome } from "./components/welcome";

export const metadata: Metadata = {
  title: "Beginner Developer Docs | AK Computer Science Club",
  description: "Start coding with AKCS: learn GitHub basics, set up a project, make your first change, and contribute to club repositories.",
};

export default function DeveloperPage() {
  return <Welcome />;
}
