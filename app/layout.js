'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import AuthLayer from "@/Auth/AuthLayer";
import RoleLayer from "@/Auth/RoleLayer";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isProtected, setIsProtected] = useState(false);
  const router = useRouter();
  const protectedRoutePrefixes = ["super", "police", "general"];
  const currentRoute = usePathname();

  useEffect(() => {
    const handleProtectedRoute = () => {
      if (!router) return; // Handle the case where router is undefined


      setIsProtected(protectedRoutePrefixes.some(prefix => currentRoute.startsWith(`/${prefix}`)));
    };

    handleProtectedRoute();
  }, [router]);
  console.log("is route protercted", isProtected)
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NextTopLoader showSpinner={false} color="#6C72FF" easing="ease" />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {isProtected ? (
            <AuthLayer>
              <RoleLayer>
                {children}
              </RoleLayer>
            </AuthLayer>
          ) : (
            <>
              {children}
            </>
          )}
        </AuthProvider>
      </body>
    </html>
  );
}
