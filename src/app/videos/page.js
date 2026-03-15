import HighlightVideo from '@/components/HighlightVideo'
import styles from './page.module.css'
import VideoTags from '@/components/VideoTags'

export const metadata = {
  title: 'Vídeos - Tubeflix'
}

export default function VideosPage() {
  return (
    <>
      <HighlightVideo tag='Vídeos' />
      <VideoTags tag='Vídeos' />
    </>
  )
}