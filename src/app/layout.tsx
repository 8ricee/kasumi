import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"],
});

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
    <html lang="en" suppressHydrationWarning className={roboto.className}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
