import type { CmsConfig, CmsBackend, InitOptions, CmsCollection } from "decap-cms-core";
import { SITE_URL } from "../constants";
import posts from "./collections/posts";

const gitBackend: CmsBackend = {
  name: "git-gateway",
  branch: "main",
  commit_messages: {
    create: "chore: :memo: Create {{collection}} “{{slug}}”",
    update: "chore: :memo: Update {{collection}} “{{slug}}”",
    delete: "chore: :memo: Delete {{collection}} “{{slug}}”",
    uploadMedia: "chore: :memo: Upload “{{path}}”",
    deleteMedia: "chore: :memo: Delete “{{path}}”",
  },
};

const vercelProxyGithub: CmsBackend = {
    name: 'github', // "proxy"
    repo: "TheRainbowPhoenix/astro-cms-template",
    branch: "main",
    base_url: "https://netlify-cms-oauth-github.vercel.app", // please refer to the guide on how to set this up
    auth_endpoint: "api/auth",
    commit_messages: {
      create: "chore: :memo: Create {{collection}} “{{slug}}”",
      update: "chore: :memo: Update {{collection}} “{{slug}}”",
      delete: "chore: :memo: Delete {{collection}} “{{slug}}”",
      uploadMedia: "chore: :memo: Upload “{{path}}”",
      deleteMedia: "chore: :memo: Delete “{{path}}”",
    }
};


const decapCMSConfig: InitOptions = {
  config: {
    site_url: SITE_URL,
    display_url: SITE_URL,
    backend: vercelProxyGithub,
    locale: "fr",
    publish_mode: "simple",
    local_backend: true,
    media_folder: "public/images/uploads",
    public_folder: "/images/uploads",
    i18n: {
      structure: "multiple_folders",
      locales: ["en", "fr"],
    },
    collections: [(posts as CmsCollection)],
  },
};
export default decapCMSConfig;
