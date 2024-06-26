import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "me80xsm2",
    dataset: "production",
    title: "My Personal Website",
    apiVersion: "2024-06-22",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})

export default config;