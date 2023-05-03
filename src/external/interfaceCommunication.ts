const backEndUrl = import.meta.env.VITE_BACKEND_URL;

export async function getCustomer(customerId: String) {
  
}

export async function sendEmail({
  mode,
  name,
  mail,
  date,
  time,
  address,
}: {
  mode: String;
  name: String;
  mail: String;
  date: String;
  time: String;
  address: String;
}) {
  fetch(backEndUrl);
}

export async function sendSms({
  mode,
  name,
  telephone,
  date,
  time,
  address,
}: {
  mode: String;
  name: String;
  telephone: String;
  date: String;
  time: String;
  address: String;
}) {
  fetch(`${backEndUrl}/v1/notify`, {
    headers: [["content-type", "application/json"]],
    method: `POST`,
    body: JSON.stringify({
      methods: [{ smsMethod:{to: "+4524638952", body: "Hey dude"} }],
    }),
  });
}

export default { sendEmail, sendSms, getCustomer };
