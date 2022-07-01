import "./chunk-N3HJPGEW.mjs";

// src/api.ts
function createFeedbackAPI(options) {
  return async function(req, res) {
    const { user, message, rate, metadata } = req.body;
    const method = req.method;
    try {
      switch (method) {
        case "POST":
          const text = `New Feedback \u2728
user: ${user ? user : "anonymous"}
message: ${message ? message : "-"}
rate: ${rate ? rate : "-"}
metadata: ${JSON.stringify(metadata)}`;
          const requests = options.webhooks.map(async (webhook) => {
            return fetch(webhook, {
              method: "POST",
              body: JSON.stringify({ text }),
              headers: { "Content-Type": "application/json" }
            });
          });
          await Promise.all(requests);
          return res.status(200).json({ message: "success" });
        default:
          throw new Error("Method not allowed");
      }
    } catch (err) {
      let message2 = err;
      if (err instanceof TypeError) {
        message2 = err.message;
      }
      return res.status(400).json({ message: message2 });
    }
  };
}
export {
  createFeedbackAPI as default
};
