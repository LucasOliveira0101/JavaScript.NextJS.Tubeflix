import { promises as fs } from 'node:fs'
import * as path from 'node:path'
import * as process from 'node:process'
import { NextResponse} from 'next/server'

export async function POST() {
    const content = (await fs.readFile(
        path.join(
            process.cwd(), 'src', 'data', 'database.json'
        )
    )).toString()
    const json = JSON.parse(content)
    return NextResponse.json(json)
}