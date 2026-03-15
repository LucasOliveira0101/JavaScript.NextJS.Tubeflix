'use client'

import { useEffect, useState } from "react"

export default function YoutubeVideoThumb({ className, youtubeId }) {
    const [ thumbnail, setThumbnail ] = useState(`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`)

    useEffect(() => {
        const url = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
        const image = new Image()
        image.onload = () => {
            if (image.width > 200) {
                setThumbnail(image.src)
            }
        }
    }, [youtubeId])
    return (
        <div className={className} style={{ backgroundImage: `url(${thumbnail})` }}></div>
    )
}