import Modal from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

import { Poppins } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
import PostModal from "./components/modals/PostModal";
import ClientOnly from "./components/ClientOnly";


export const metadata = {
  title: "KitapTap",
  description: "Book crossing web app",
};

const font = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <PostModal />
        <RegisterModal />
        <LoginModal />
        <Navbar currentUser = {currentUser} />
        <div
          className="
            pb-20 pt-38
          "
        >
        {children}
        </div>
      </body>
    </html>
  );
}
