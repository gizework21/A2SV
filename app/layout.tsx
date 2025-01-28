import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-DR17LYS00W"
        id="google-analytics"
      />
      <Script
        id="google-analytics-inline"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DR17LYS00W');
            `,
        }}
      />
    </html>
  );
}