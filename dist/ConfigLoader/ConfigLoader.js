var t = { VITE_LOG_LEVEL: "DEBUG", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function n() {
  let r = a(), e = i();
  return [...r, ...e];
}
function u() {
  let r = n();
  for (let e of r)
    if (e.LOG_LEVEL)
      return e.LOG_LEVEL;
  return null;
}
function a() {
  let r = [];
  for (let e in t) {
    let l = t[e];
    e.includes("VITE_") && (e = e.replace("VITE_", "")), r.push({ [e]: l });
  }
  return r;
}
function i() {
  let r = [];
  for (let e in process.env) {
    let l = process.env[e];
    e.includes("REACT_APP_") && (e = e.replace("REACT_APP_", "")), r.push({ [e]: l });
  }
  return r;
}
export {
  u as GetDebugLevel,
  n as LoadConfig
};
