import type { Mode } from "./types";

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
  customerId: String,
  mode: Mode
) {
  throw new Error("Not implemented");
}
