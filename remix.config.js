/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "vercel",
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
  // routes: (defineRoutes) =>
  //   defineRoutes((route) => {
  //     route("/", "routes/comingSoon.tsx", {
  //       index: true,
  //     });
  //   }),
};
