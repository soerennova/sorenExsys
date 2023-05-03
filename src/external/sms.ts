import type { Customer, Mode } from "../lib/types";
import util from "../lib/util";

const backEndUrl = import.meta.env.VITE_BACKEND_URL;

export async function get(id : string): Promise<string> {
  let response = await fetch(`${backEndUrl}/v1/getSmsTemplate/${id}`);
  return (await response.json()).inner;
}

export default{get}