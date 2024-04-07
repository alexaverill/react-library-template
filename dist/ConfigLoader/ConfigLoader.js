var t = { VITE_LOG_LEVEL: "DEBUG", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function n() {
  let l = a(), e = i();
  return [...l, ...e];
}
function u() {
  let l = n();
  for (let e of l)
    if (console.log(e), e.LOG_LEVEL)
      return e.LOG_LEVEL;
  return null;
}
function a() {
  let l = [];
  for (let e in t) {
    let r = t[e];
    e.includes("VITE_") && (e = e.replace("VITE_", "")), l.push({ [e]: r });
  }
  return l;
}
function i() {
  let l = [];
  for (let e in process.env) {
    let r = process.env[e];
    e.includes("REACT_") && (e = e.replace("REACT_", "")), l.push({ [e]: r });
  }
  return l;
}
export {
  u as GetDebugLevel,
  n as LoadConfig
};
