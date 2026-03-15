'use client'

import YouTube from 'react-youtube'
import style from './page.module.css'
import { useParams } from 'next/navigation'

export default function PlayerPage() {
    const { youtubeId } = useParams()
    return (
        <div className={style.player}>
            <YouTube 
                videoId={youtubeId}
                opts={{
                    playerVars: {
                        autoplay: 1,
                        rel: 0,
                    }
                }}
            />
        </div>
    )
}