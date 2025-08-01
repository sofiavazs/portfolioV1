import type { Metadata } from "next";

import StyledComponentsRegistry from "./lib/registry";
import NavigationBar from "./components/NavigationBar";
import GlobalThemeWrapper from "./lib/GlobalThemeWrapper";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Sofia Vaz Sousa Portfolio - Software Developer",
  description:
    "I&aposm software developer with a 12-year background in healthcare that transitioned into tech. Currently, I'm building human-centered products within e-health.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalThemeWrapper>
            <main>
              <AnimatedBackground />
              <NavigationBar />
              {children}
              <Footer />
            </main>
          </GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
