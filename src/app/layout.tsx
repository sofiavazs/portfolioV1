import type { Metadata } from "next";

import { AppDataProvider } from "./context/AppContext";
import { getAboutData, getExperience, getProjects } from "./api/sanity";
import StyledComponentsRegistry from "./lib/registry";
import GlobalThemeWrapper from "./lib/GlobalThemeWrapper";

export const metadata: Metadata = {
  title: "Sofia Vaz Sousa Portfolio - Software Developer",
  description:
    "I'm software developer with a 12-year background in healthcare that transitioned into tech. Currently, I'm building human-centered products within e-health.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await getProjects();
  const experience = await getExperience();
  const about = await getAboutData();

  const data = {
    projects,
    experience,
    about,
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Antic+Didone&family=Cormorant:ital,wght@0,300..700;1,300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalThemeWrapper>
            <AppDataProvider data={data}>
              <main>{children}</main>
            </AppDataProvider>
          </GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
