import type { Mode } from "../lib/types";
import type { Customer } from "../lib/types";
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
  await delay(500);
  return {
    name: "Søren E Lorentzen",
    address: "Lollandsgade 62, 8000 Aarhus C",
    phone: "+4524638952",
    mail: "soeren@novasolar.dk",
    date: "10/12/2023",
    time: "14:00 - 16:30",
  };
}
