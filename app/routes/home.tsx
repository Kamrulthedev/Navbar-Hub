import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Responsive Navbar Hub" },
    { name: "description", content: "Welcome Responsive Navbar Hub!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1>Kamrul;l</h1>
    </div>
  );
}
