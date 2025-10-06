"use client";

import { PortableTextBlock } from "@portabletext/types";
import { createContext, useContext } from "react";

type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

type About = {
  _id: string;
  upperText?: string;
  title?: string;
  subtitle?: string;
  links?: string[];
  intro?: string;
  about: PortableTextBlock[];
  picture?: SanityImage;
  description?: string;
  tech?: string[];
};

type Project = {
  _id: string;
  name: string;
  description: string;
  url?: string;
  github?: string;
  tags?: string[];
};

type Experience = {
  _id: string;
  company: string;
  dates: string;
  jobTitle: string;
  description?: string;
  projects?: {
    name: string;
    dates: string;
    role: string;
    description?: string;
  }[];
};

type AppData = {
  projects: Project[];
  experience: Experience[];
  about: About[];
};

const AppDataContext = createContext<AppData>({
  projects: [],
  experience: [],
  about: [],
});

export function AppDataProvider({
  data,
  children,
}: {
  data: AppData;
  children: React.ReactNode;
}) {
  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
}

export function useAppData() {
  return useContext(AppDataContext);
}
