import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    {
        path: "/", 
        element: <home></home>,
    },
] satisfies RouteConfig;

