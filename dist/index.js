var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => FeedbackWidget
});
module.exports = __toCommonJS(src_exports);
var import_react10 = __toESM(require("react"));

// src/store.tsx
var import_react = __toESM(require("react"));
var defaultState = {
  isModalShow: false,
  onModalShow: (state) => {
  },
  formUser: "",
  onChangeFormUser: (value) => {
  },
  formMessage: "",
  onChangeFormMessage: (value) => {
  },
  formRate: "",
  onChangeFormRate: (value) => {
  },
  isSending: false,
  onSend: () => {
  },
  isHasUser: false,
  type: "form",
  themeColor: "#1f5a68",
  textColor: "white",
  showOnInitial: false
};
var FeedbackContext = (0, import_react.createContext)(defaultState);
function FeedbackProvider({
  children,
  user,
  metadata,
  type,
  apiPath,
  themeColor,
  textColor,
  showOnInitial
}) {
  const [isModalShow, setIsModalShow] = (0, import_react.useState)(showOnInitial);
  const [formUser, setFormUser] = (0, import_react.useState)("");
  const [formMessage, setFormMessage] = (0, import_react.useState)("");
  const [formRate, setFormRate] = (0, import_react.useState)("");
  const [isSending, setIsSending] = (0, import_react.useState)(false);
  const isHasUser = !!user;
  const onSend = async () => {
    try {
      setIsSending(true);
      await fetch(apiPath, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user: user || formUser,
          message: formMessage,
          rate: formRate,
          metadata
        })
      });
      setFormUser("");
      setFormMessage("");
      setFormRate("");
      setIsModalShow(false);
    } catch (err) {
      alert(err);
    } finally {
      setIsSending(false);
    }
  };
  const onModalShow = (status) => {
    setIsModalShow(status);
  };
  const onChangeFormUser = (value) => {
    setFormUser(value);
  };
  const onChangeFormMessage = (value) => {
    setFormMessage(value);
  };
  const onChangeFormRate = (value) => {
    setFormRate(value);
  };
  return /* @__PURE__ */ import_react.default.createElement(FeedbackContext.Provider, {
    value: {
      isModalShow,
      onModalShow,
      formUser,
      onChangeFormUser,
      formMessage,
      onChangeFormMessage,
      formRate,
      onChangeFormRate,
      isSending,
      onSend,
      isHasUser,
      type,
      themeColor,
      textColor,
      showOnInitial
    }
  }, children);
}
var store_default = FeedbackContext;

// src/components/modal.tsx
var import_react6 = __toESM(require("react"));

// src/components/modal-element-rate.tsx
var import_react2 = __toESM(require("react"));
var import_classnames = __toESM(require("classnames"));
function FeedbackModalElementRate({
  children,
  selected,
  onChange = () => {
  },
  value
}) {
  const isSelected = selected === value;
  return /* @__PURE__ */ import_react2.default.createElement("label", {
    className: (0, import_classnames.default)("feedback-widget-form-rate-label", isSelected && "selected")
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    className: "feedback-widget-form-rate-control",
    type: "radio",
    name: "rate",
    value,
    onChange: (e) => onChange(e.target.value)
  }), children);
}

// src/components/emoji-sad.tsx
var import_react3 = __toESM(require("react"));
function EmojiSad(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react3.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ import_react3.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "12"
  }), /* @__PURE__ */ import_react3.default.createElement("path", {
    d: "M169.6,176a48.1,48.1,0,0,0-83.2,0",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ import_react3.default.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ import_react3.default.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ import_react3.default.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ import_react3.default.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }));
}

// src/components/emoji-nice.tsx
var import_react4 = __toESM(require("react"));
function EmojiNice(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react4.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ import_react4.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ import_react4.default.createElement("path", {
    d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ import_react4.default.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ import_react4.default.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }));
}

// src/components/emoji-meh.tsx
var import_react5 = __toESM(require("react"));
function EmojiMeh(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react5.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ import_react5.default.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "12"
  }), /* @__PURE__ */ import_react5.default.createElement("line", {
    x1: "88",
    y1: "160",
    x2: "168",
    y2: "160",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ import_react5.default.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ import_react5.default.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }));
}

// src/components/modal.tsx
function FeedbackModal({
  title,
  description
}) {
  const {
    isModalShow,
    formUser,
    onChangeFormUser,
    formMessage,
    onChangeFormMessage,
    formRate,
    onChangeFormRate,
    isSending,
    onSend,
    isHasUser,
    type
  } = (0, import_react6.useContext)(store_default);
  if (!isModalShow)
    return null;
  return /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "feedback-widget-modal"
  }, (title || description) && /* @__PURE__ */ import_react6.default.createElement("header", {
    className: "feedback-widget-header"
  }, title && /* @__PURE__ */ import_react6.default.createElement("h3", {
    className: "feedback-widget-modal-title"
  }, title), description && /* @__PURE__ */ import_react6.default.createElement("p", null, description)), /* @__PURE__ */ import_react6.default.createElement("form", {
    className: "feedback-widget-form",
    onSubmit: (e) => {
      e.preventDefault();
      onSend();
    }
  }, !isHasUser && /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("input", {
    className: "feedback-widget-form-control",
    type: "email",
    name: "email",
    placeholder: "Email",
    value: formUser,
    onChange: (event) => onChangeFormUser(event.target.value)
  })), ["full", "form"].includes(type) && /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("textarea", {
    className: "feedback-widget-form-control",
    name: "message",
    placeholder: "Message",
    rows: 3,
    required: true,
    value: formMessage,
    onChange: (event) => onChangeFormMessage(event.target.value)
  })), ["full", "rate"].includes(type) && /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("div", {
    className: "feedback-widget-form-rate"
  }, /* @__PURE__ */ import_react6.default.createElement(FeedbackModalElementRate, {
    value: "bad",
    selected: formRate,
    onChange: onChangeFormRate
  }, /* @__PURE__ */ import_react6.default.createElement(EmojiSad, {
    color: formRate === "bad" ? "#000" : "#999"
  })), /* @__PURE__ */ import_react6.default.createElement(FeedbackModalElementRate, {
    value: "meh",
    selected: formRate,
    onChange: onChangeFormRate
  }, /* @__PURE__ */ import_react6.default.createElement(EmojiMeh, {
    color: formRate === "meh" ? "#000" : "#999"
  })), /* @__PURE__ */ import_react6.default.createElement(FeedbackModalElementRate, {
    value: "nice",
    selected: formRate,
    onChange: onChangeFormRate
  }, /* @__PURE__ */ import_react6.default.createElement(EmojiNice, {
    color: formRate === "nice" ? "#000" : "#999"
  })))), /* @__PURE__ */ import_react6.default.createElement("div", null, /* @__PURE__ */ import_react6.default.createElement("button", {
    className: "feedback-widget-form-control",
    type: "submit",
    disabled: isSending
  }, "Send"))));
}

// src/components/trigger-button.tsx
var import_react9 = __toESM(require("react"));

// src/components/icon-default.tsx
var import_react7 = __toESM(require("react"));
function IconDefault(_a) {
  var _b = _a, { size = 34, color = "#fff" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react7.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ import_react7.default.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "14"
  }), /* @__PURE__ */ import_react7.default.createElement("circle", {
    cx: "132",
    cy: "128",
    r: "12"
  }), /* @__PURE__ */ import_react7.default.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "12"
  }), /* @__PURE__ */ import_react7.default.createElement("circle", {
    cx: "180",
    cy: "128",
    r: "12"
  }));
}

// src/components/icon-close.tsx
var import_react8 = __toESM(require("react"));
function IconClose(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ import_react8.default.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ import_react8.default.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "14"
  }), /* @__PURE__ */ import_react8.default.createElement("line", {
    x1: "200",
    y1: "200",
    x2: "56",
    y2: "56",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "14"
  }));
}

// src/components/trigger-button.tsx
function TriggerButton({
  children
}) {
  const { isModalShow, onModalShow, textColor } = (0, import_react9.useContext)(store_default);
  return /* @__PURE__ */ import_react9.default.createElement("button", {
    type: "button",
    "aria-label": "Feedback",
    className: "feedback-widget-trigger-button",
    onClick: () => {
      onModalShow(!isModalShow);
    }
  }, isModalShow ? /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement(IconClose, {
    color: textColor,
    size: 30
  })) : /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, children ? children : /* @__PURE__ */ import_react9.default.createElement(IconDefault, {
    color: textColor
  })));
}

// src/index.tsx
function FeedbackWidget({
  user,
  metadata,
  type = "form",
  apiPath = "api/feedback",
  themeColor = "#00e9a3",
  textColor = "#000",
  title,
  description,
  showOnInitial = false,
  customIcon
}) {
  return /* @__PURE__ */ import_react10.default.createElement(FeedbackProvider, {
    user,
    metadata,
    type,
    apiPath,
    themeColor,
    textColor,
    showOnInitial
  }, /* @__PURE__ */ import_react10.default.createElement("div", {
    className: "feedback-widget",
    style: {
      "--color-primary": themeColor,
      "--color-text": textColor
    }
  }, /* @__PURE__ */ import_react10.default.createElement(TriggerButton, null, customIcon), /* @__PURE__ */ import_react10.default.createElement(FeedbackModal, {
    title,
    description
  })));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
