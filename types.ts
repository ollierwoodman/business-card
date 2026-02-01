export type Lang = "en" | "zh";

export type Dictionary = {
  head: {
    title: string;
  };
  main: {
    fullname: string;
    altname: string;
    tagline: string;
    education: [];
  };
  sections: {
    connect: string,
    education: string,
    projects: string
  },
  language: {
    en: string;
    zh: string;
    current: "en" | "zh";
  };
  socials: Social[];
  usernameCopiedToClipboard: string;
  projects: Project[];
  projectLearnMore: string;
};

export type Social = {
  id: string;
  name: string;
  text: string;
  url?: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  publishedState: string;
  imgSrc: string;
  url: string;
};

export type Education = {
  id: string;
  title: string;
  specialisation: string;
  institution: string;
  graduatedMonthYear: string;
};
