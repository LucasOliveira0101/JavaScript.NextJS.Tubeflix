'use client'

import YouTube from 'react-youtube'
import style from './page.module.css'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import NotFoundPage from '@/app/not-found'

export default function PlayerPage() {
    const { youtubeId } = useParams()
    const [videoExists, setVideoExists] = useState(null)

    useEffect(() => {
        async function checkVideo() {
            const defaultTitle = 'Tubeflix'

            const response = await fetch(`/api/video/${youtubeId}`, {
                method: 'POST'
            })

            if (!response.ok) {
                document.title = `Vídeo não encontrado - ${defaultTitle}`
                setVideoExists(false)
                return
            }

            const video = await response.json()

            if (!video) {
                document.title = `Vídeo não encontrado - ${defaultTitle}`
                setVideoExists(false)
                return
            }

            document.title = `${video.title} - ${defaultTitle}`
            setVideoExists(true)
        }

        checkVideo()
    }, [youtubeId])

    if (videoExists === false) {
        return <NotFoundPage />
    }

    if (videoExists === null) {
        return null
    }

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