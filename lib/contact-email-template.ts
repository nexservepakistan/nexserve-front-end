const BRAND_DARK = "#0f2642";
const BRAND_ORANGE = "#fda400";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fieldRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 14px 0; border-bottom: 1px solid #e8ecf1;">
        <p style="margin: 0 0 4px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: ${BRAND_ORANGE};">
          ${label}
        </p>
        <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.5; color: ${BRAND_DARK};">
          ${escapeHtml(value)}
        </p>
      </td>
    </tr>
  `;
}

export function buildContactEmailHtml({
  name,
  email,
  phone,
  service,
  message,
}: {
  name: string;
  email?: string;
  phone: string;
  service?: string;
  message: string;
}) {
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NexServe Contact Form</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #f6f8fb;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f6f8fb; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(15, 38, 66, 0.08);">
            <tr>
              <td style="background-color: ${BRAND_DARK}; padding: 28px 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 24px; font-weight: 700; color: #ffffff;">
                        Nex<span style="color: ${BRAND_ORANGE};">Serve</span>
                      </p>
                      <p style="margin: 8px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 13px; color: rgba(255, 255, 255, 0.78);">
                        Pakistan — Home Services
                      </p>
                    </td>
                    <td align="right" valign="top">
                      <span style="display: inline-block; padding: 8px 14px; border-radius: 999px; background-color: ${BRAND_ORANGE}; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 700; color: ${BRAND_DARK};">
                        New Inquiry
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 28px 32px 8px;">
                <h1 style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 22px; line-height: 1.3; color: ${BRAND_DARK};">
                  New Contact Form Submission
                </h1>
                <p style="margin: 10px 0 0; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 1.6; color: #6b7280;">
                  Someone reached out through the NexServe website contact form.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding: 8px 32px 24px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRow("Name", name)}
                  ${fieldRow("Email", email || "Not provided")}
                  ${fieldRow("Phone", phone)}
                  ${fieldRow("Service", service || "Not selected")}
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 0 32px 28px;">
                <div style="border-radius: 10px; border: 1px solid #e8ecf1; background-color: #f9fafb; padding: 18px 20px;">
                  <p style="margin: 0 0 8px; font-family: Arial, Helvetica, sans-serif; font-size: 12px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: ${BRAND_ORANGE};">
                    Message
                  </p>
                  <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 15px; line-height: 1.7; color: ${BRAND_DARK};">
                    ${safeMessage}
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="background-color: ${BRAND_DARK}; padding: 18px 32px;">
                <p style="margin: 0; font-family: Arial, Helvetica, sans-serif; font-size: 12px; line-height: 1.6; color: rgba(255, 255, 255, 0.72); text-align: center;">
                  This email was sent from the NexServe Pakistan contact form.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}
