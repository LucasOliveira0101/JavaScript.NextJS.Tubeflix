import { promises as fs } from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'
import { NextResponse} from 'next/server'
import { objectToArray } from '@/helpers/helpers'

export async function GET(request, data) {
    const youtubeId = await (data.params).youtubeId

    const content = (await fs.readFile(
        path.join(
            process.cwd(), 'src', 'data', 'database.json'
        )
    )).toString()
    const json = JSON.parse(content)
    const videos = objectToArray(json)
    const video = videos.find(video => video.key === youtubeId) ?? null

    return NextResponse.json(video, { status: video ? 200 : 404 })
}