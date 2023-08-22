import "./globals.css";
import { Rubik } from "next/font/google";

// components
import Header from "./components/Header";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "lavdev app",
  description: "lavdev app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <div className="root-body-wrapper relative">
          <Header />
          <div className="root-main container mx-auto">{children}</div>
        </div>
      </body>
    </html>
  );
}
