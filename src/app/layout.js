import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "ParrotPal",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Remove the synchronous script */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></script> */}
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* Load Bootstrap asynchronously */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"
          async
        ></script>
      </body>
    </html>
  );
}
