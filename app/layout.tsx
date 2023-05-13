import "../styles/globals.css";

import Navigation from "./Navigation/Navigation";
import Banner from "./Banner/Banner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>this is Sparta</title>
      </head>

      <body className="bg-[rgb(36,36,36)] h-screen text-white snap-y snap-mandatory overflow-scroll z-0">
        <Navigation />

        {children}
      </body>
    </html>
  );
}
