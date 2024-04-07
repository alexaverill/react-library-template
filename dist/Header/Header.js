import '../assets/Header.css';
import { jsx as a } from "react/jsx-runtime";
const d = "_header_1onnf_1", r = {
  header: d
};
function o({ className: e, children: s }) {
  let t = e ? `${e} ${r.header}` : `${r.header}`;
  return /* @__PURE__ */ a("div", { className: t, children: s });
}
export {
  o as Header
};
