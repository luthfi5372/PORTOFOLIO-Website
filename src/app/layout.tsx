import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/animations";
import { SoundProvider } from "@/components/ui";
import CustomCursor from "@/components/ui/CustomCursor";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luthfi-aziz.com"),
  title: {
    default: "Luthfi Aziz | Liquid Portfolio",
    template: "%s | Luthfi Aziz"
  },
  description: "Praktisi Inovasi & IoT. Menghadirkan solusi teknologi dengan estetika Liquid Glass.",
  keywords: ["IoT", "Web Development", "Next.js", "Liquid Design", "Research", "NCC", "PIKIR", "President NCC", "Chairman PIKIR"],
  authors: [{ name: "Muhammad Luthfi Aziz" }],
  creator: "Muhammad Luthfi Aziz",
  
  // OpenGraph Configuration
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://luthfi-aziz.com",
    title: "Luthfi Aziz | Liquid Portfolio",
    description: "Eksplorasi proyek IoT dan riset inovatif dalam antarmuka masa depan.",
    siteName: "Luthfi Aziz Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luthfi Aziz Liquid Portfolio Preview",
      },
    ],
  },

  // Twitter Configuration
  twitter: {
    card: "summary_large_image",
    title: "Luthfi Aziz | Liquid Portfolio",
    description: "IoT Practitioner & Innovation Researcher.",
    images: ["/og-image.jpg"],
  },

  // Favicon Configuration
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <SoundProvider>
          <CustomCursor />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </SoundProvider>
      </body>
    </html>
  );
}
