"use client"

import { useEffect, useRef, useState } from 'react'
import style from './HighlightVideo.module.css'
import { getRandomItem, getVideos, objectToArray } from '@/helpers/helpers'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function HighlightVideo({ tag }) {
    const router = useRouter()
    const [ video, setVideo ] = useState(null)
    const videosList = useRef()

    useEffect(() => {
        async function fetchVideos() {
            videosList.current = await getVideos(tag)
            setVideo(getRandomItem(videosList.current))
        }
        fetchVideos()
    }, [])

    function onLuckyClick(event) {
        const video = getRandomItem(videosList.current)
        router.push(`/player/${video.key}`)
        event.preventDefault()
    }
    return (
        video && (
            <div className={style.video}>
                <div className={style.thumbnail}
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/default.jpg)` }}></div>
                <div className={style.details}>
                    <h2 className={style.title}>{video.title}</h2>
                    <p className={style.description}>{video.description}</p>
                    <Link href={`/player/${video.key}`} className={style.play}>Assistir</Link>
                    <Link href='#' onClick={onLuckyClick} className={style.lucky}>Estou com Sorte</Link>
                </div>
            </div>
        )
    )
}