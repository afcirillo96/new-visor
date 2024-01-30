import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MapComponent from "./map/MapComponent";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visor de Mapas Test",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
            <Sidebar/>
              <div>{children}</div>
            <MapComponent/>
        </div>
      </body>
    </html>
  );
}
