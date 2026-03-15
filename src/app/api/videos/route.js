import { NextResponse} from 'next/server'
import { getVideos } from '@/helpers/helpers-server'

export async function POST() {
    const videos = await getVideos()
    return NextResponse.json(videos)
}