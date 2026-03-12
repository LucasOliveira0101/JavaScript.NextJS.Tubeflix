import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de videos do YouTube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Tubeflix</h1>
          <nav>
            <Link href="/">Início</Link>
            <Link href="/videos">Vídeos</Link>
            <Link href="/musics">Músicas</Link>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>&copy; 2026 Tubeflix. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
