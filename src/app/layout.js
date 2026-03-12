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
            <a href="/">Início</a>
            <a href="/videos">Vídeos</a>
            <a href="/musics">Músicas</a>
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
