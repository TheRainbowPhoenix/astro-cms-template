import {config} from "astro.config.mjs";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function urlFor(path: string) {
  if (config.base) {
    return `/${config.base}${path.startsWith('/') ? path : "/" + path}`;
  } else {
   return path;
  }
}