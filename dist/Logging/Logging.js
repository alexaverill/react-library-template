var s = Object.defineProperty;
var L = (e, o, t) => o in e ? s(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var i = (e, o, t) => (L(e, typeof o != "symbol" ? o + "" : o, t), t);
import { GetLoggingLevel as l } from "../ConfigLoader/ConfigLoader.js";
import "react/jsx-runtime";
class r {
  static Debug(o) {
    this.LogLevel === "DEBUG" && console.log(o);
  }
  static Info(o) {
    (this.LogLevel === "INFO" || this.LogLevel === "DEBUG") && console.info(o);
  }
  static Warn(o) {
    (this.LogLevel === "WARN" || this.LogLevel === "DEBUG") && console.warn(o);
  }
  static Error(o) {
    console.error(o);
  }
}
i(r, "LogLevel", l() ?? "PROD");
export {
  r as Logging
};
