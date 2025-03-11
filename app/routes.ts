import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("page/home/Home.tsx"), 
    route("/about", "page/about/About.tsx"), 
    // route("/contact", "routes/contact.tsx"), 
] satisfies RouteConfig;
