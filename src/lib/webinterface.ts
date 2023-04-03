import type {Customer, Mode} from './types'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function getMail(templateId: string): Promise<string> {
  await delay(5000);
  return `<html>
    <head>
        <title>Køb af varmepumpe hos NovaSolar  søren test</title>
    </head>
    
    <body>
        <div style="background: lightgray; padding:1%; font-family: Arial, Helvetica, sans-serif;">
            <div
                style="margin:auto; max-width:700px; background:white; border-radius:20px; box-shadow: 4px 6px 4px 3px rgba(0, 0, 0, 0.1);">
                <div>
                    <img width="100%" height="auto" src="https://www.novasolar.dk/pics/grafik/Mail-Header.jpg" style="border-radius:20px;">
    
                    <img width="100%" height="auto" src="https://www.novasolar.dk/pics/grafik/pral_badges_hvid.jpg">
                </div>
                <div style="max-width:700px; padding:1%">
                    <br>
                    <b style="font-size: large;">Kære {{navn}}</b>
                    <hr noshade size="2px" color="#ff8c1a" />
                    
                    <p>
                        Vi udvikler lige nu et nyt KLS system til vores serviceafdeling. Du modtager derfor fremover din
                        servicerapport pr. mail.
                        
                    </p>
                    <p>
                        Ifm. serviceeftersyn udført d. {{date}} får du hermed tilsendt din servicerapport, den er vedhæftet i denne mail
                        Faktura/kvittering får du tilsendt snarest.
                        <br></br>
                        Hvis du har betalt med mobilepay, så har du din kvittering på din APP under "aktiviteter".
                    </p>
                    <hr noshade size="2px" color="#ff8c1a" />
                    <p>Har du spørgsmål angående din servicerapport er du velkommen til at vende retur.
                        Vi har uanset altid en kopi af jeres servicerapport til brug for KLS og vi udleverer ikke denne uden jeres
                        samtykke, men det betyder også, at vi altid har jeres historik på varmepumpen, om i mister jeres rapport, eller
                        har brug for hjælp til at fremskaffe igen.
                    <br></br>
                        Vi håber du var tilfreds med service besøget.
                        </p>
                    
            <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe"
                style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;"
                data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
                <p style="font-size:12px; line-height:20px;">
                    <a class="Unsubscribe--unsubscribeLink" href="{{{unsubscribe}}}" target="_blank"
                        style="font-family:sans-serif;text-decoration:none;">
                        Afmæld
                    </a>
                    -
                    <a href="{{{unsubscribe_preferences}}}" target="_blank" class="Unsubscribe--unsubscribePreferences"
                        style="font-family:sans-serif;text-decoration:none;">
                        Preferancer
                    </a>
                </p>
            </div>
        </div>
        </div>
        </div>
    </body>
    
    </html>`;
}

export async function getCustomer(customerId: string): Promise<Customer> {
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

export async function getSms(
  mode: Mode,
  customer: Customer
): Promise<string> {
  await delay(5000);
  return `Hej ${customer.name}
  ${customer.address}
  ${customer.phone}
  ${customer.mail}
  ${customer.date}
  ${customer.time}
  `;
}
