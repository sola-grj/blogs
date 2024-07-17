import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "WEB",
      icon: "internet",
      prefix: "web/",
      link: "web/",
      collapsible:true,
      children: [
        {
          icon: "vuejs",
          text: "vue",
          prefix: "vue/",
          link: "vue/",
          collapsible:true,
          children: [
            {
              text: "vue2",
              icon: "vue2-outline1",
              prefix: "vue2/",
              link: "vue2/",
            },
            {
              text: "vue3",
              icon: "Vue3",
              prefix: "vue3/",
              link: "vue3/",
            },
          ],
        },
        {
          icon: "js",
          text: "js",
          prefix: "js/",
          link: "js/",
        },
        {
          icon: "react",
          text: "react",
          prefix: "react/",
          link: "react/",
        },
        {
          icon: "weibiaoti3",
          text: "ECMA",
          prefix: "ECMA/",
          link: "ECMA/",
        },
        {
          icon: "CSS-",
          text: "css",
          prefix: "css/",
          link: "css/",
        },
        {
          icon: "webpack",
          text: "webpack",
          prefix: "webpack/",
          link: "webpack/",
        },
        {
          icon: "typescript1",
          text: "typescript",
          prefix: "typescript/",
          link: "typescript/",
        },
        {
          icon: "HTML",
          text: "html",
          prefix: "html/",
          link: "html/",
        },
        {
          icon: "uni-app",
          text: "uniapp",
          prefix: "uniapp/",
          link: "uniapp/",
        },
        ],
    },
    {
      text: "PYTHON",
      icon: "python",
      prefix: "python/",
      link: "python/",
      collapsible:true,
    },
    {
      text: "AI",
      icon: "wuguan",
      prefix: "AI/",
      link: "AI/",
      collapsible:true,
    },
    {
      text: "database",
      icon: "database",
      prefix: "database/",
      link: "database/",
      collapsible:true,
    },
    {
      text: "Git",
      icon: "git",
      prefix: "Git/",
      link: "Git/",
      collapsible:true,
    }
  ],
});
