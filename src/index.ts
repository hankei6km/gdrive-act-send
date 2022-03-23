import * as core from '@actions/core'
import { driveClient, sendFile } from 'guratan'

try {
  const fileId = core.getInput('file_id')
  const parentId = core.getInput('parent_id')
  const destFileName = core.getInput('dest_file_name')
  const srcFileName = core.getInput('src_file_name')
  const destMimeType = core.getInput('dest_mime_type')
  const srcMimeType = core.getInput('src_mime_type')
  if (typeof fileId !== 'string') {
    throw new Error(`file_id: the input is invalid : ${fileId}`)
  }
  if (typeof parentId !== 'string') {
    throw new Error(`parent_id: the input is invalid : ${parentId}`)
  }
  if (typeof destFileName !== 'string') {
    throw new Error(`dest_file_name: the input is invalid : ${destFileName}`)
  }
  if (typeof srcFileName !== 'string' || srcFileName === '') {
    throw new Error(`src_file_name: the input is invalid : ${srcFileName}`)
  }
  if (typeof destMimeType !== 'string') {
    throw new Error(`dest_mime_type: the input is invalid : ${destMimeType}`)
  }
  if (typeof srcMimeType !== 'string') {
    throw new Error(`src_mime_type: the input is invalid : ${srcMimeType}`)
  }

  const file_id = await sendFile(driveClient(), {
    fileId,
    parentId,
    destFileName,
    srcFileName,
    destMimeType,
    srcMimeType
  })
  core.setOutput('file_id', file_id)
} catch (err: any) {
  core.setFailed(err.message)
}
