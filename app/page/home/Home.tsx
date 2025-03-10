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
      <h1 className="text-5xl font-serif text-blue-600 text-center">Kamrul</h1>
    </div>
  );
}
