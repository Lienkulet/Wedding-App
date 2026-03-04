import { Cormorant_Garamond, Montserrat } from "next/font/google";

import { AppShell } from "@/components/sections/app-shell";
import { LanguageProvider } from "@/lib/language-context";
import "@/app/globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Enchanted Weddings",
  description: "Wedding landing page generated from Figma and refactored for production quality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${cormorant.variable}`}>
        <LanguageProvider>
          <AppShell>{children}</AppShell>
        </LanguageProvider>
      </body>
    </html>
  );
}
