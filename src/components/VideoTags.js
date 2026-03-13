'use client'

import { useEffect, useState } from 'react'
import style from './VideoTags.module.css'
import { objectToArray, removeDuplicates } from '@/helpers/helpers'

export default function VideoTags({ tag }) {
    const [ tags, setTags ] = useState([])

    useEffect(() => {
        async function fetchVideos() {
            const response = await fetch('/database.json', {
                next: {
                    revalidate: 60
                }
            })
            const videos = await response.json()
            const videosList = objectToArray(videos)
                .filter(video => tag == undefined || video.tags.includes(tag))
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
            </div>
        ))
    )
}