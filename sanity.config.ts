import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./src/sanity/schemas";

export default defineConfig({
  projectId: "e11t99da",
  dataset: "production",
  title: "Turkology Institute",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: { types: schemas },
});
