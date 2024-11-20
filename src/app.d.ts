// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/* Example, this is basically jus a .h file in C
import { json, error, text, redirect } from "@sveltejs/kit";

return text("Hello World", { status: 200, headers: { "Content-Type": "text/plain" }});
return json({ message: "Success", data: {...} }, { status: 200 });
throw error(404, { message: "Page not found"});
throw reroute(302, "/login");
*/

declare global {
  namespace App {
    // interface Locals {}
  }
}

declare function text(body: string, init?: ResponseInit | undefined): Response;

declare function json(data: any, init?: ResponseInit | undefined): Response;

declare function error(
  status: number,
  body?: {
    message: string;
  } extends App.Error ?
    App.Error | string | undefined
  : never,
): never;

declare function reroute(
  status: 300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308 | ({} & number),
  location: string | URL,
): never;

export { error, json, text, reroute };
