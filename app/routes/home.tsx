import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Responsive Navbar Hub" },
    { name: "description", content: "Welcome Responsive Navbar Hub!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
