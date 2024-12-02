import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assistants for nUBoard",
  description: "OpenAI Assistant를 적용한 nUBoard(nUDR)매뉴얼입니다.",
  icons: {
    icon: "/logo_img.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <a href="/" title="메인으로 이동하기"><img className="logo" src="/logo_img.png" alt="nUBoard Logo" /></a>
      </body>
    </html>
  );
}
