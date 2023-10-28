import { ThemeProvider } from "@/components/providers/theme.provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GistBee",
  description:
    "The productive & collaborative workspace where ideas turn into reality!",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme : light)",
        url: "/GistBee-favicon",
        href: "/GistBee-favicon.ico",
      },
      {
        media: "(prefers-color-scheme : dark)",
        url: "/GistBee-favicon",
        href: "/GistBee-favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="gistbee-them-001"
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
