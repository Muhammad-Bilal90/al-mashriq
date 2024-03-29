import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import LargeScreenNav from "@/layout/Navbar/LargeScreenNav";
import AwardsAndRecognitions from "@/components/AwardsAndRecognitions";
import Footer from "@/layout/Footer/Footer";
import SmallScreenNavbar from "@/layout/Navbar/SmallScreenNavbar";

const inter = Roboto({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="relative my-container no-scrollbar overflow-y-scroll scroll-smooth snap-y snap-mandatory scroll-p[10px] overscroll-y-contain h-screen w-full">
          <LargeScreenNav />
          <SmallScreenNavbar />
          {children}
          <AwardsAndRecognitions />
        </div>
      </body>
    </html>
  );
}
