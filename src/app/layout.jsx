
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar/Sidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";
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
            <div className="h-full sticky top-2 left-0">
              <Sidebar />
            </div>
            <div className="w-full px-5">
              <Header />
              <main id='main' className="w-full" >
                <div id="main-content" className="w-fill">
                  {children}
                </div>
              </main>
            </div>
            <RightSidebar className={'mt-[24px]'} />
          </div>

        </div>
      </body>
    </html>
  );
}
