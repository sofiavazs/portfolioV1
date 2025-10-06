import type { Metadata } from "next";

import { AppDataProvider } from "./context/AppContext";
import { getAboutData, getExperience, getProjects } from "./api/sanity";
import StyledComponentsRegistry from "./lib/registry";
import NavigationBar from "./components/NavigationBar";
import GlobalThemeWrapper from "./lib/GlobalThemeWrapper";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

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
      <body>
        <StyledComponentsRegistry>
          <GlobalThemeWrapper>
            <AppDataProvider data={data}>
              <main>
                <AnimatedBackground />
                <NavigationBar />
                {children}
                <Footer />
              </main>
            </AppDataProvider>
          </GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
