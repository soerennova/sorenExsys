import Handlebars from "handlebars";
import type { Customer } from "./types";
import {
  send as notify,
  type NotifyMethod,
  type PayLoad,
} from "../external/notify";
import { compute_rest_props } from "svelte/internal";
import type { Mode } from "../external/email";

export async function fillTemplate(
  template: () => Promise<string>,
  customer: Customer
): Promise<string> {
  let preCompiledTemplate = await template();
  let compiledTemplate = Handlebars.compile(preCompiledTemplate);
  return compiledTemplate(customer);
}

export async function send(args: {
  customer: Customer;
  shouldSendMail: boolean;
  mode: Mode;
  smsBody?: string;
}) {
  let methods: NotifyMethod[] = [];
  if (args.smsBody) {
    methods.push({ smsMethod: { to: args.customer.phone, body: args.smsBody } });
  }
  if (args.shouldSendMail) {
    methods.push({
      emailMethod: {
        to: { email: args.customer.mail, name: args.customer.name },
        from: { email: "noreply@novasolar.dk", name: "NovaSolar" },
        mode: args.mode,
        data: args.customer,
      },
    });
  }

  let payLoad: PayLoad = {
    methods,
  };
  await notify(payLoad);
}

export default fillTemplate;
