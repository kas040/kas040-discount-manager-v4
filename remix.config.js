/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  serverModuleFormat: "esm",
  serverDependenciesToBundle: [/^marked.*/],
  watchPaths: ["./public"],
  // Verwijder de routes configuratie om de default file-based routing te gebruiken
};
