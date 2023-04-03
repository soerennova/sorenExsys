import type { Customer, Mode } from "./types";
import util from "./util";

export async function get(mode: Mode, customer: Customer): Promise<string> {
  await util.delay(5000);
  return `Hej ${customer.name}
    ${customer.address}
    ${customer.phone}
    ${customer.mail}
    ${customer.date}
    ${customer.time}
    `;
}

export default{get}