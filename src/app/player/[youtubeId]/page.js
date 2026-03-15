'use client'

import YouTube from 'react-youtube'
import style from './page.module.css'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function PlayerPage() {
    const { youtubeId } = useParams()

    useEffect(() => {
    async function setTitle() {
        const response = await fetch(`/api/video/${[youtubeId]}`, { method: "POST"})
        const video = await response.json()
        document.title = `${video.title} - ${document.title}`
    }
    setTitle()        
    }, [])

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