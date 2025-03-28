import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import GoogleAdsense from "./_components/adsense";

export const metadata: Metadata = {
  title: "BenKeys App",
  description: "transform your text like tHiS.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

  const googleId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
      {googleId && <GoogleAdsense pId={googleId} />}
    </html>
  );
}
