import { FILE_COLLECTIONS_PATH } from "../constants";

const posts = {
  name: "posts",
  label: "Posts",
  label_singular: "Post",
  description: "Posts list",
  summary: "{{name}} - {{slug}}",
  create: true,
  preview_path: "pages/{{slug}}",
  folder: `${FILE_COLLECTIONS_PATH}/posts`,
  i18n: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      i18n: true,
      required: true,
    },
    {
      label: "Page URL",
      name: "page_url",
      widget: "string",
      i18n: true,
      required: true,
    },
    {
      label: "Body",
      name: "body",
      widget: "markdown",
      required: false,
      i18n: true,
    },
    {
      label: "Featured Image",
      name: "thumbnail",
      widget: "image",
      required: false,
      i18n: "duplicate",
    },
  ],
};

export default posts;
