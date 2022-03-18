import * as core from '@actions/core'
import { GoogleAuth } from 'google-auth-library'
import { drive as gdrive } from '@googleapis/drive'
import { sendFile } from 'guratan'

try {
  const parentId = core.getInput('parent-id')
  const destFileName = core.getInput('dest-file-name')
  const srcFileName = core.getInput('src-file-name')
  if (typeof parentId !== 'string' || parentId === '') {
    throw new Error(`parentId: the input is invalid : ${parentId}`)
  }
  if (typeof destFileName !== 'string' || destFileName === '') {
    throw new Error(`destFileName: the input is invalid : ${destFileName}`)
  }
  if (typeof srcFileName !== 'string' || srcFileName === '') {
    throw new Error(`srcFileName: the input is invalid : ${srcFileName}`)
  }

  const SCOPES = ['https://www.googleapis.com/auth/drive.file']
  const auth = new GoogleAuth({
    scopes: SCOPES
  })

  const file_id = await sendFile(
    gdrive({ version: 'v3', auth }),
    parentId,
    destFileName,
    srcFileName
  )
  core.setOutput('file-id', file_id)
} catch (err: any) {
  core.setFailed(err.message)
}
