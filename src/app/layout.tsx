import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Kasumi",
  description: "Language model for Kasumi",
  icons: {
    icon: [
      { url: "/favicon/light.svg", media: "(prefers-color-scheme: light)", type: "image/svg+xml" },
      { url: "/favicon/dark.svg", media: "(prefers-color-scheme: dark)", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
