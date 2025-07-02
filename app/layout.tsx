import "@/src/ui/css/globals.tailwind.css";
import { inter, oswald, poppins, shadowsIntoLight } from "@/src/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${shadowsIntoLight.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
