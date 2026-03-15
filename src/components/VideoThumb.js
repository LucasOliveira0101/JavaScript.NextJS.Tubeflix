'use client'

import style from './VideoThumb.module.css'
import Link from 'next/link'

export default function VideoThumb({ video }) {
    return (
        video && <Link href={`/player/${video.key}`} className={style.video}>
            <div className={style.thumbnail}
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/mqdefault.jpg)` }}></div>
        </Link>
    )   
}