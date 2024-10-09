export type Lang = "en" | "zh";

export type Dictionary = {
  head: {
    title: string;
  },
  main: {
    fullname: string,
    altname: string,
    tagline: string,
  },
  language: {
    en: string,
    zh: string,
    current: "en" | "zh",
  },
  socials: Social[],
  usernameCopiedToClipboard: string;
  projects: Project[],
  projectLearnMore: string,
}

export type Social = { 
  id: string,
  name: string, 
  text: string,
  url?: string,
  icon: { src: string },
}

export type Project = {
  id: string,
  name: string,
  description: string,
  publishedState: string,
  imgSrc: string,
  url: string,
}