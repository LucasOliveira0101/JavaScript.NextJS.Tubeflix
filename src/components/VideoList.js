'use client'

import { useEffect, useState } from 'react'
import style from './VideoList.module.css'
import { getVideos } from '@/helpers/helpers'

export default function VideoList({ tag }) {
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        async function fetchVideos() {
            const videosList = await getVideos(tag)
            setVideos(videosList)
        }
        fetchVideos()
    }, [])
    
    return (
        <div className={style.list}>
            {videos.map(video => (
                <div key={video.key} className={style.video}>
                    <h4 className={style.title}>{video.title}</h4>
                </div>
            ))}
        </div>
    )
}