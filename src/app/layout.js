import "./globals.css";

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de videos do YouTube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
