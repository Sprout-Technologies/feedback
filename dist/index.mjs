import {
  __objRest,
  __spreadValues
} from "./chunk-N3HJPGEW.mjs";

// src/index.tsx
import React10 from "react";

// src/store.tsx
import React, { createContext, useState } from "react";
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
var FeedbackContext = createContext(defaultState);
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
  const [isModalShow, setIsModalShow] = useState(showOnInitial);
  const [formUser, setFormUser] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formRate, setFormRate] = useState("");
  const [isSending, setIsSending] = useState(false);
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
  return /* @__PURE__ */ React.createElement(FeedbackContext.Provider, {
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
import React6, { useContext } from "react";

// src/components/modal-element-rate.tsx
import React2 from "react";
import cx from "classnames";
function FeedbackModalElementRate({
  children,
  selected,
  onChange = () => {
  },
  value
}) {
  const isSelected = selected === value;
  return /* @__PURE__ */ React2.createElement("label", {
    className: cx("feedback-widget-form-rate-label", isSelected && "selected")
  }, /* @__PURE__ */ React2.createElement("input", {
    className: "feedback-widget-form-rate-control",
    type: "radio",
    name: "rate",
    value,
    onChange: (e) => onChange(e.target.value)
  }), children);
}

// src/components/emoji-sad.tsx
import React3 from "react";
function EmojiSad(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ React3.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ React3.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "12"
  }), /* @__PURE__ */ React3.createElement("path", {
    d: "M169.6,176a48.1,48.1,0,0,0-83.2,0",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ React3.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ React3.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ React3.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ React3.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }));
}

// src/components/emoji-nice.tsx
import React4 from "react";
function EmojiNice(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ React4.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ React4.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ React4.createElement("path", {
    d: "M169.6,152a48.1,48.1,0,0,1-83.2,0",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ React4.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ React4.createElement("circle", {
    cx: "164",
    cy: "108",
    r: "12"
  }));
}

// src/components/emoji-meh.tsx
import React5 from "react";
function EmojiMeh(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ React5.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ React5.createElement("circle", {
    cx: "128",
    cy: "128",
    r: "96",
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "12"
  }), /* @__PURE__ */ React5.createElement("line", {
    x1: "88",
    y1: "160",
    x2: "168",
    y2: "160",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "12"
  }), /* @__PURE__ */ React5.createElement("circle", {
    cx: "92",
    cy: "108",
    r: "12"
  }), /* @__PURE__ */ React5.createElement("circle", {
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
  } = useContext(store_default);
  if (!isModalShow)
    return null;
  return /* @__PURE__ */ React6.createElement("div", {
    className: "feedback-widget-modal"
  }, (title || description) && /* @__PURE__ */ React6.createElement("header", {
    className: "feedback-widget-header"
  }, title && /* @__PURE__ */ React6.createElement("h3", {
    className: "feedback-widget-modal-title"
  }, title), description && /* @__PURE__ */ React6.createElement("p", null, description)), /* @__PURE__ */ React6.createElement("form", {
    className: "feedback-widget-form",
    onSubmit: (e) => {
      e.preventDefault();
      onSend();
    }
  }, !isHasUser && /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("input", {
    className: "feedback-widget-form-control",
    type: "email",
    name: "email",
    placeholder: "Email (optional)",
    value: formUser,
    onChange: (event) => onChangeFormUser(event.target.value)
  })), ["full", "form"].includes(type) && /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("textarea", {
    className: "feedback-widget-form-control",
    name: "message",
    placeholder: "Message",
    rows: 3,
    required: true,
    value: formMessage,
    onChange: (event) => onChangeFormMessage(event.target.value)
  })), ["full", "rate"].includes(type) && /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("div", {
    className: "feedback-widget-form-rate"
  }, /* @__PURE__ */ React6.createElement(FeedbackModalElementRate, {
    value: "bad",
    selected: formRate,
    onChange: onChangeFormRate
  }, /* @__PURE__ */ React6.createElement(EmojiSad, {
    color: formRate === "bad" ? "#000" : "#999"
  })), /* @__PURE__ */ React6.createElement(FeedbackModalElementRate, {
    value: "meh",
    selected: formRate,
    onChange: onChangeFormRate
  }, /* @__PURE__ */ React6.createElement(EmojiMeh, {
    color: formRate === "meh" ? "#000" : "#999"
  })), /* @__PURE__ */ React6.createElement(FeedbackModalElementRate, {
    value: "nice",
    selected: formRate,
    onChange: onChangeFormRate
  }, /* @__PURE__ */ React6.createElement(EmojiNice, {
    color: formRate === "nice" ? "#000" : "#999"
  })))), /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("button", {
    className: "feedback-widget-form-control",
    type: "submit",
    disabled: isSending
  }, "Send")), /* @__PURE__ */ React6.createElement("div", {
    style: { marginTop: 20, fontSize: "0.9em", textAlign: "center" }
  }, /* @__PURE__ */ React6.createElement("a", {
    href: "https://discord.gg/WWdc59WayG",
    target: "_blank"
  }, "Join our discord"))));
}

// src/components/trigger-button.tsx
import React9, { useContext as useContext2 } from "react";

// src/components/icon-default.tsx
import React7 from "react";
function IconDefault(_a) {
  var _b = _a, { size = 34, color = "#fff" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ React7.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ React7.createElement("path", {
    d: "M132,216H47.7a7.6,7.6,0,0,1-7.7-7.7V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "14"
  }), /* @__PURE__ */ React7.createElement("circle", {
    cx: "132",
    cy: "128",
    r: "12"
  }), /* @__PURE__ */ React7.createElement("circle", {
    cx: "84",
    cy: "128",
    r: "12"
  }), /* @__PURE__ */ React7.createElement("circle", {
    cx: "180",
    cy: "128",
    r: "12"
  }));
}

// src/components/icon-close.tsx
import React8 from "react";
function IconClose(_a) {
  var _b = _a, { size = 34, color = "#000" } = _b, props = __objRest(_b, ["size", "color"]);
  return /* @__PURE__ */ React8.createElement("svg", __spreadValues({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    color,
    fill: "currentColor",
    viewBox: "0 0 256 256"
  }, props), /* @__PURE__ */ React8.createElement("line", {
    x1: "200",
    y1: "56",
    x2: "56",
    y2: "200",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "14"
  }), /* @__PURE__ */ React8.createElement("line", {
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
  const { isModalShow, onModalShow, textColor } = useContext2(store_default);
  return /* @__PURE__ */ React9.createElement("button", {
    type: "button",
    "aria-label": "Feedback",
    className: "feedback-widget-trigger-button",
    onClick: () => {
      onModalShow(!isModalShow);
    }
  }, isModalShow ? /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(IconClose, {
    color: textColor,
    size: 30
  })) : /* @__PURE__ */ React9.createElement(React9.Fragment, null, children ? children : /* @__PURE__ */ React9.createElement(IconDefault, {
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
  return /* @__PURE__ */ React10.createElement(FeedbackProvider, {
    user,
    metadata,
    type,
    apiPath,
    themeColor,
    textColor,
    showOnInitial
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "feedback-widget",
    style: {
      "--color-primary": themeColor,
      "--color-text": textColor
    }
  }, /* @__PURE__ */ React10.createElement(TriggerButton, null, customIcon), /* @__PURE__ */ React10.createElement(FeedbackModal, {
    title,
    description
  })));
}
export {
  FeedbackWidget as default
};
