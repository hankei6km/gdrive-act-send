# gdrive-act-send

This action sends a file to Google Drive.

## Inputs

### `parent-id`

**Required** id of folder on Google Drive.

### `dest-file-name`

**Required** file name in Google Drive.

### `src-file-name`

**Required** file name in local filesystem.

## Outputs

### `file-id`

id of file that is sended into Google Drive.

## Environment Variables

### `GOOGLE_APPLICATION_CREDENTIALS`

**Required** path to Service Account Credentials JSON file.

## Example usage

```yaml
- id: 'auth'
  name: 'Authenticate to Google Cloud'
  uses: 'google-github-actions/auth@v0'
  with:
    workload_identity_provider: ${{ secrets.WORKLOAD_IDENTITY_PROVIDER }}
    service_account: ${{ secrets.SERVICE_ACCOUNT }}

- name: Send file
  id: send
  uses: hankei6km/gdrive-act-send@v0.1.1
  with:
    parent-id: ${{ secrets.PARENT_ID }}
    dest-file-name: ${{ secrets.DEST_FILE_NAME }}
    src-file-name: ${{ secrets.SRC_FILE_NAME }}
```

## Licenses

MIT License

Copyright (c) 2022 hankei6km
