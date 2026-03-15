'use client'

import { useEffect, useState } from 'react'
import style from './VideoTags.module.css'
import { getVideos, objectToArray, removeDuplicates } from '@/helpers/helpers'
import VideoList from './VideoList'

export default function VideoTags({ tag }) {
    const [ tags, setTags ] = useState([])

    useEffect(() => {
        async function fetchVideos() {
            const videosList = await getVideos(tag)
            const tagList = removeDuplicates(videosList
                .map(video => video.tags)
                .flat()
                .sort()
                .filter(tag => tag !== 'Vídeos' && tag !== 'Músicas'))
            setTags(tagList)
            }
        fetchVideos()
    }, [])
    
    return (
        tags.map(tag => (
            <div key={tag} className={style.tag}>
                <h3 className={style.title}>{tag}</h3>
                <VideoList tag={tag} />
            </div>
        ))
    )
}