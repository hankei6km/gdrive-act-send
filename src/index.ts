import * as core from '@actions/core'
import { driveClient, sendFile } from 'guratan'

try {
  const parentId = core.getInput('parent_id')
  const destFileName = core.getInput('dest_file_name')
  const srcFileName = core.getInput('src_file_name')
  if (typeof parentId !== 'string' || parentId === '') {
    throw new Error(`parent_id: the input is invalid : ${parentId}`)
  }
  if (typeof destFileName !== 'string' || destFileName === '') {
    throw new Error(`dest_file_name: the input is invalid : ${destFileName}`)
  }
  if (typeof srcFileName !== 'string' || srcFileName === '') {
    throw new Error(`src_file_name: the input is invalid : ${srcFileName}`)
  }

  const file_id = await sendFile(driveClient(), {
    parentId,
    destFileName,
    srcFileName,
    destMimeType: '',
    srcMimeType: ''
  })
  core.setOutput('file_id', file_id)
} catch (err: any) {
  core.setFailed(err.message)
}
