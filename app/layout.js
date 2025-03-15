import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Opinion",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
