export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "614c0bcc1fffb73c693e36cd",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-e9h3d12b",
                  apiId: "baff46c6-7161-4f18-b753-d245de41083e",
                },
                {
                  buildHookId: "614c0bcc38bbd8422134362c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-38enzrur",
                  apiId: "69da110a-68a5-4cb6-8aba-f6794fd5d0c4",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/programmingfire/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-38enzrur.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
