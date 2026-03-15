import Link from "next/link"
import style from './layout.module.css'
import "./globals.css"
import './theme.css'
import './fonts.css'
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de videos do YouTube",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="pt-BR">
        <body className={style.body}>
          <header className={style.header}>
            <h1 className="tourney-font"><Link href="/">Tubeflix</Link></h1>
            <nav>
              <Link href="/videos">Vídeos</Link>
              <Link href="/musics">Músicas</Link>
            </nav>
          </header>
          <main className={style.main}>
            {children}
          </main>
          <footer className={style.footer}>
            <p>&copy; 2026 Tubeflix. Todos os direitos reservados.</p>
            <ThemeToggle />
          </footer>
        </body>
      </html>
    </ThemeProvider>

  );
}
