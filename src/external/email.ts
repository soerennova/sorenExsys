import type { Customer} from "../lib/types";
import util from "../lib/util";
const backEndUrl = import.meta.env.VITE_BACKEND_URL;

export type Mode = "firstService" | "service" | "montage";

export async function get(mode: Mode): Promise<string> {
  let response = await fetch(`${backEndUrl}/v1/getEmailTemplate/${mode}`);
  return (await response.json()).inner;
}

export default{get}