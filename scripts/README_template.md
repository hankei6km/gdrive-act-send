# Google Drive tools Action - send

This action sends a file to Google Drive.

## Environment Variables

### `GOOGLE_APPLICATION_CREDENTIALS`

**Required** path to Service Account Credentials JSON file.

<!-- INSERT -->

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
  uses: hankei6km/gdrive-act-send@v:CUR_VER
  with:
    parent-id: ${{ secrets.PARENT_ID }}
    dest-file-name: ${{ secrets.DEST_FILE_NAME }}
    src-file-name: ${{ secrets.SRC_FILE_NAME }}
```

## Related

- [Google Drive tools Action - share](https://github.com/hankei6km/gdrive-act-share)
- [Google Drive tools Action - recv](https://github.com/hankei6km/gdrive-act-recv)

## Licenses

MIT License

Copyright (c) 2022 hankei6km
