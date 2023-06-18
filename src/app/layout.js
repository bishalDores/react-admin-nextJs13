"use client";

import Sidebar from "@/components/Sidebar";
import { Source_Sans_Pro } from "next/font/google";
import Topbar from "@/components/Topbar";
import { ColorModeContext, useMode } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.css";

const sourceSansProp = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export default function RootLayout({ children }) {
  const [theme, colorMode] = useMode();

  return (
    <html lang="en">
      <body className={sourceSansProp.className} suppressHydrationWarning={true}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar />
              <main className="content">
                <Topbar />

                {children}
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
