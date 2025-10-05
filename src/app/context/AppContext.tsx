"use client";

import { createContext, useContext } from "react";

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
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
};

type AppData = {
  projects: Project[];
  experiences: Experience[];
};

const AppDataContext = createContext<AppData>({
  projects: [],
  experiences: [],
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
