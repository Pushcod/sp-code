
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "lucide-react";
import Header from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sp-code",
  description: "Информационный портал для молодых программистов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className + ' w-full bg-gray-50 text-gray-800 '}>
        <div className="__next">
          <div className="w-full">
            <Sidebar />
            <div className="w-full">
              <Header />
              <main id='main' className="w-full" >
                <div id="main-content" className="w-fill">
                  {children}
                </div>
              </main>
            </div>
          </div>
          
        </div>
      </body>
    </html>
  );
}