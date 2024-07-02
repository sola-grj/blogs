import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blogs/",

  lang: "zh-CN",
  title: "孜然地球",
  description: "孜然地球的博客",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
