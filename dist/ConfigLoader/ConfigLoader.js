var l = { VITE_LOG_LEVEL: "DEBUG", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
function n() {
  return [...a()];
}
function i() {
  let t = n();
  for (let e of t)
    if (console.log(e), e.LOG_LEVEL)
      return e.LOG_LEVEL;
  return null;
}
function a() {
  let t = [];
  for (let e in l) {
    let r = l[e];
    e.includes("VITE_") && (e = e.replace("VITE_", "")), t.push({ [e]: r });
  }
  return t;
}
export {
  i as GetDebugLevel,
  n as LoadConfig
};
