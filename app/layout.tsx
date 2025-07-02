import "@/src/ui/css/globals.tailwind.css";
import { oswald, poppins, shadowsIntoLight } from "@/src/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${shadowsIntoLight.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
