import { JetBrains_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransitions from "@/components/PageTransitions";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Aden",
  description: "A Simple Next portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <StairTransition />
        <PageTransitions>{children}</PageTransitions>
      </body>
    </html>
  );
}
