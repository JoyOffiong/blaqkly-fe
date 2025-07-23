"use client"

import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const pathname = usePathname();

  const hideHeaderPaths = ["/", "/sign_up", "/log_in"];

  const shouldHideHeader = hideHeaderPaths.includes(pathname);

return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Provider store={store}> 
                <PersistGate loading={null} persistor={persistor}>
 {!shouldHideHeader && <Header />}
       <main>
        

          {children} 
       </main>  
       </PersistGate></Provider>
      </body>
    </html>
  );
}
