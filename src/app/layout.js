import Link from "next/link"
import style from './layout.module.css'
import "./globals.css"
import './theme.css'

export const metadata = {
  title: "Tubeflix",
  description: "A melhor seleção de videos do YouTube",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={style.body}>
        <header className={style.header}>
          <h1><Link href="/">Tubeflix</Link></h1>
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
        </footer>
      </body>
    </html>
  );
}
