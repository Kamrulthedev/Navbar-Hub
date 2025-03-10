import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Responsive Navbar Hub" },
    { name: "description", content: "Welcome to Responsive Navbar Hub!" },
  ];
}

export default function Home() {
  return (
    <div className="h-screen">
      <h1 className="text-5xl font-serif text-center text-fuchsia-700">Kamrul</h1>
    </div>
  );
}
