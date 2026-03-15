import Image from 'next/image'
import style from './not-found.module.css'

export default function NotFoundPage() {
    return (
        <div className={style.notFound}>
            <h2>404 | Página não encontrada</h2>
            <Image src='/404-background.png' layout='responsive' width={600} height={300} alt='Página não encontrada' />
        </div>
    )
}