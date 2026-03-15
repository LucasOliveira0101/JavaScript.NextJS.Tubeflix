'use client'

import style from './VideoThumb.module.css'
import Link from 'next/link'
import YoutubeVideoThumb from './YoutubeVideoThumb'

export default function VideoThumb({ video }) {
    return (
        video && <Link href={`/player/${video.key}`} className={style.video}>
            <YoutubeVideoThumb className={style.thumbnail} youtubeId={video.key} />
        </Link>
    )   
}