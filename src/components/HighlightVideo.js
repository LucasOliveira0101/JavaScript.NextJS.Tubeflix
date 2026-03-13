"use client"

import { useEffect, useState } from 'react'
import style from './HighlightVideo.module.css'
import { getRandomItem, objectToArray } from '@/helpers/helpers'
import Link from 'next/link'

export default function HighlightVideo({ tags }) {
    const [ video, setVideo ] = useState(null)

    useEffect(() => {
        async function fetchVideos() {
            const response = await fetch('/database.json', {
                next: {
                    revalidate: 60
                }
            })
            const videos = await response.json()
            const videosList = objectToArray(videos)
                .filter(video => tags == undefined || video.tags.includes(tags))
            setVideo(getRandomItem(videosList))
        }
        fetchVideos()
    }, [])

    return (
        video && (
            <div className={style.video}>
                <div className={style.thumbnail}
                    style={{ backgroundImage: `url(https://img.youtube.com/vi/${video.key}/maxresdefault.jpg), url(https://img.youtube.com/vi/${video.key}/default.jpg)` }}></div>
                <div className={style.details}>
                    <h2 className={style.title}>{video.title}</h2>
                    <p className={style.description}>{video.description}</p>
                    <Link href='#' className={style.play}>Assistir</Link>
                </div>
            </div>
        )
    )
}