// Makes cloudflare work ig
export const prerender = true;
export const ssr = true;
export const trailingSlash = "never";
export const config = {
  runtime: "edge",
  regions: "all",
};
