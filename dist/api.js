var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/api.ts
var api_exports = {};
__export(api_exports, {
  default: () => createFeedbackAPI
});
module.exports = __toCommonJS(api_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
