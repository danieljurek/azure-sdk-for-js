// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Configure SMS options when sending a message
 */

const { SmsClient } = require("@azure/communication-sms");

// Load the .env file if it exists
const dotenv = require("dotenv");
dotenv.config();

export const main = async () => {
  console.log("== Send SMS Message With Options ==");
  const connectionString =
    process.env["COMMUNICATION_CONNECTION_STRING"] ||
    "endpoint=https://<resource-name>.communication.azure.com/;<access-key>";
  const client = new SmsClient(connectionString);
  const sendResults = await client.send(
    {
      // Phone numbers must be in E.164 format
      from: "<from-phone-number>",
      to: ["<to-phone-number-1>", "<to-phone-number-2>"],
      message: "Weekly Promotion!"
    },
    {
      //delivery reports are delivered via EventGrid
      enableDeliveryReport: true,
      //tags are applied to the delivery report
      tag: "marketing"
    }
  );

  // individual messages can encounter errors during sending
  // use the "successful" property to verify
  for (const sendResult of sendResults) {
    if (sendResult.successful) {
      console.log("Success: ", sendResult);
    } else {
      console.error("Something went wrong when trying to send this message: ", sendResult);
    }
  }
  console.log("== Done: Send SMS Message With Options ==");
};

main().catch((error) => {
  console.error("Encountered an error while sending SMS: ", error);
  process.exit(1);
});
