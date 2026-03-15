'use client'

import YouTube from 'react-youtube'
import style from './page.module.css'

export default function PlayerPage() {
    return (
        <div className={style.player}>
            <YouTube 
                videoId='Fxx52dJGBA4'
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