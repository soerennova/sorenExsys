import type { Mode } from "./email";

const backEndUrl = import.meta.env.VITE_BACKEND_URL;

export type NotifyMethod =
  | {
      smsMethod: { to: string; body: string };
    }
  | {
      emailMethod: Email;
    };

export interface Email {
  to: Recipient;
  from: Recipient;
  mode: Mode;
  data: any;
}

export interface Recipient {
  email: string;
  name: string;
}

export interface PayLoad {
  methods: NotifyMethod[];
}

export async function send(payLoad: PayLoad) {
  let response = await fetch(`${backEndUrl}/v1/notify`, {
    method: "POST",
    body: JSON.stringify(payLoad),
    headers: [["content-type", "application/json"]],
  });
  if(response.status == 500){
    alert(await response.text());
  }
}


export default {};
