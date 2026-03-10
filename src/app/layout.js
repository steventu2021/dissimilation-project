import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ['400', '700', '900'],
  variable: "--font-merriweather",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dissimilation",
  description: "An interactive explanation of Linguistic Dissimilation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
