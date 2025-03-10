import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Responsive Navbar Hub" },
    { name: "description", content: "Welcome Responsive Navbar Hub!" },
  ];
}

export default function Home() {
  return (
    <div  className="h-screen">
      <h1 className="text-5xl font-serif text-blue-600 text-center">Kamrul;l</h1>
    </div>
  );
}
