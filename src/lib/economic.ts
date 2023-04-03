import type { Mode } from "./types";
import type { Customer } from "./types";
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

/**
 * Economic fetch customerdata
 * @module lib/economic
 *
 *  */
export default { fetchCustomerData };

/**
 * Fetches customer data from the Economic API.
 * @param customerId - The ID of the customer to fetch.
 * @param mode - What economic database to fetch data from.
 * @returns A Promise that resolves with the customer data object.
 */
async function fetchCustomerData(
  customerId: string,
  mode: Mode
): Promise<Customer> {
  await delay(5000);
  return {
    name: "Søren",
    address: "Lollandsgade 62, 8000 Aarhus C",
    phone: "24638952",
    mail: "soeren@novasolar.dk",
    date: "99/99/9999",
    time: "22:00 - 23:30",
  };
}
