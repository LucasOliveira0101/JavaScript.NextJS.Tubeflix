'use client'

import style from './VideoThumb.module.css'
import Link from 'next/link'

export default function VideoThumb({ video }) {
    return (
        video && <Link href='#' className={style.video}>
            <div className={style.thumbnail}
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/default.jpg)` }}></div>
        </Link>
    )   
}