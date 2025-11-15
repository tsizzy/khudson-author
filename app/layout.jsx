import "../styles/globals.css";
// or: import "../styles/tailwind.css";
// or: import "./globals.css";

export const metadata = {
  title: "K. Hudson – Author",
  description: "Writer of Dreamfield and other stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* No global navbar or footer here */}
        {children}
      </body>
    </html>
  );
}
