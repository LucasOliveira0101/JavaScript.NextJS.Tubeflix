"use client"

import { useEffect, useState } from 'react'
import style from './HighlightVideo.module.css'
import { getRandomItem, objectToArray } from '@/helpers/helpers'
import Link from 'next/link'

const videos = {
    "d40wvJmPD9k": {
      "title": "Mais do que resistência, é sobre responsabilidade | Pr Telmo Martinello",
      "description": "Um alerta para que o homem permaneça vigilante, firme na fé e responsável pelo cuidado espiritual de sua casa.",
      "tags": [ "Vídeos", "Documentários e Informativos" ]
    },

    "BqXmSzyl67s": {
        "title": "O Mistério da Origem da Vida",
        "description": "Descubra os mistérios por trás do surgimento da vida no planeta Terra. Este documentário explora teorias científicas e ideias intrigantes que desafiam nossa compreensão do universo. Uma jornada emocionante pelo desconhecido.",
        "tags": ["Vídeos", "Documentários e Informativos"]
    },
    "Fxx52dJGBA4": {
      "title": "Leandro Marques - Sansão sem noção",
      "description": "Álbum: EU TENHO GRAÇA Lançamento: Graça Music 2015 ® Letra e Música: Leandro Marques",
      "tags": [ "Músicas", "Documentários e Informativos" ]
    },
    "0Xx6UW2IOSw": {
      "title": "Hits do TikTok 2024",
      "description": "Confira os maiores sucessos do TikTok de 2024. Uma seleção com músicas que não saem da sua cabeça e dominam as tendências.",
      "tags": ["Músicas", "Populares Nacionais"]
    },
}

export default function HighlightVideo({ tags }) {
    const [ video, setVideo ] = useState(null)

    useEffect(() => {
        const videosList = objectToArray(videos)
            .filter(video => tags == undefined || video.tags.includes(tags))
        setVideo(getRandomItem(videosList))
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