import "./globals.css";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
