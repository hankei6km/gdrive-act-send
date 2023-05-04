import { fileURLToPath } from 'node:url'
import { jest } from '@jest/globals'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// mock の作り方が不明なので、input の検証のみ.

// read-only property で戻せない。前は使えたと思ったのだが.
//const saveEnv = process.env
//beforeEach(() => (process.env = { ...saveEnv }))
//afterAll(() => (process.env = { ...saveEnv }))

const saveInputs = {
  fileId: process.env['INPUT_FILE_ID'],
  parentId: process.env['INPUT_PARENT_ID'],
  destFileName: process.env['INPUT_DEST_FILE_NAME'],
  srcFileName: process.env['INPUT_SRC_FILE_NAME'],
  supportsAllDrives: process.env['INPUT_SUPPORTS_ALL_DRIVES']
}
beforeEach(() => {
  process.env['INPUT_FILE_ID'] = saveInputs.fileId
  process.env['INPUT_PARENT_ID'] = saveInputs.parentId
  process.env['INPUT_DEST_FILE_NAME'] = saveInputs.destFileName
  process.env['INPUT_SRC_FILE_NAME'] = saveInputs.srcFileName
  process.env['INPUT_SUPPORTS_ALL_DRIVES'] = saveInputs.supportsAllDrives
})
afterAll(() => {
  process.env['INPUT_FILE_ID'] = saveInputs.fileId
  process.env['INPUT_PARENT_ID'] = saveInputs.parentId
  process.env['INPUT_DEST_FILE_NAME'] = saveInputs.destFileName
  process.env['INPUT_SRC_FILE_NAME'] = saveInputs.srcFileName
  process.env['INPUT_SUPPORTS_ALL_DRIVES'] = saveInputs.supportsAllDrives
})

describe('index', () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const ip = path.join(__dirname, '..', 'dist', 'index.mjs')
  it('should print error message(srcFileName = blank)', async () => {
    process.env['INPUT_FILE_ID'] = 'fileId'
    process.env['INPUT_PARENT_ID'] = 'parentId'
    process.env['INPUT_DEST_FILE_NAME'] = 'destFileName'
    process.env['INPUT_SRC_FILE_NAME'] = ''
    process.env['INPUT_SUPPORTS_ALL_DRIVES'] = 'false'
    const [stdout, stderr]: [string, string] = await new Promise((resolve) => {
      cp.exec(`node ${ip}`, { env: process.env }, (_err, stdout, stderr) => {
        resolve([stdout.toString(), stderr.toString()])
      })
    })
    expect(stdout).toMatch(
      /\:\:error\:\:src_file_name\: the input is invalid \:/
    )
    expect(stderr).toEqual('')
  })
})
