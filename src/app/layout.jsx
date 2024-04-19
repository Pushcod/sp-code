
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sp-code",
  description: "Информационный портал для молодых программистов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className + ' w-full bg-blue-50 text-stone-800 text-base'}>
        <div className="__next">
          <div className="w-full p-5 flex">
           <Sidebar/>
            <div className="w-full px-5">
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
