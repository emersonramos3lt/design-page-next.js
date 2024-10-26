import { title } from "process";
import "./globals.css";

export const metadata = {
  title: "CodeCanvas",
  description: "We turn ideas into exceptional digital experiences."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
