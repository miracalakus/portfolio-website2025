import { useSearchParams } from "next/navigation";

export default function ProjectPage() {
  const params = useSearchParams();
  const slug = params.get("slug");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">Project: {slug}</h1>
      <p className="mt-4">Detailed project information will be loaded here.</p>
    </main>
  );
}
