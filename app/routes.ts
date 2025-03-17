import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("page/home/Home.tsx"), 
    route("/about", "page/about/About.tsx"), 
    route("/news", "page/news/News.tsx"), 
    route("/services", "page/services/Services.tsx"), 
] satisfies RouteConfig;
