"use client"

import { useEffect, useRef, useState } from 'react'
import style from './HighlightVideo.module.css'
import { getRandomItem, getVideos, objectToArray } from '@/helpers/helpers'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import YoutubeVideoThumb from './YoutubeVideoThumb'

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
    }, [tag])

    function onLuckyClick(event) {
        const video = getRandomItem(videosList.current)
        router.push(`/player/${video.key}`)
        event.preventDefault()
    }
    return (
        video && (
            <div className={style.video}>
                <YoutubeVideoThumb className={style.thumbnail} youtubeId={video.key} />
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