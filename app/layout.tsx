import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const APP_NAME = "PWA Hub";
const APP_DESCRIPTION = "Next.js + Serwist PWA";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: "%s - NJS App",
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    shortcut: "/favicon.webp",
    apple: [{ url: "/icons/icon-180.webp", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
