var s = Object.defineProperty;
var l = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var i = (o, e, t) => (l(o, typeof e != "symbol" ? e + "" : e, t), t);
import { GetDebugLevel as L } from "../ConfigLoader/ConfigLoader.js";
import "react/jsx-runtime";
class r {
  static Debug(e) {
    this.LogLevel === "DEBUG" && console.log(e);
  }
  static Info(e) {
    (this.LogLevel === "INFO" || this.LogLevel === "DEBUG") && console.info(e);
  }
  static Warn(e) {
    (this.LogLevel === "WARN" || this.LogLevel === "DEBUG") && console.warn(e);
  }
  static Error(e) {
    console.error(e);
  }
}
i(r, "LogLevel", L() ?? "PROD");
export {
  r as Logging
};
