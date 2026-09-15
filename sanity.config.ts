import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { schemas } from "./src/sanity/schemas";

export default defineConfig({
  projectId: "e11t99da",
  dataset: "production",
  title: "Turkology Institute",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title("İçerik Yönetimi")
          .items([
            orderableDocumentListDeskItem({
              type: "newsArticle",
              title: "Haberler (Sıralanabilir)",
              S,
              context,
            }),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "newsArticle"
            ),
          ]);
      },
    }),
  ],
  schema: { types: schemas },
});
