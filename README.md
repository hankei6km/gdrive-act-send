# Google Drive tools Action - send

This action sends a file to Google Drive.

## Environment Variables

### `GOOGLE_APPLICATION_CREDENTIALS`

**Required** path to Service Account Credentials JSON file.

## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `file_id` | <p>The ID of the file or shared drive.</p> | `false` | `""` |
| `parent_id` | <p>The ID of the parent folders in remote</p> | `false` | `""` |
| `dest_file_name` | <p>The name of the file in remote</p> | `false` | `""` |
| `src_file_name` | <p>The name(path) of the file in local filesystem</p> | `true` | `""` |
| `dest_mime_type` | <p>The MIME type of the file.</p> | `false` | `""` |
| `src_mime_type` | <p>Media mime-type</p> | `false` | `""` |
| `supports_all_drives` | <p>Supports both My Drives and shared drives(<code>includeItemsFromAllDrives</code> is also enabled)</p> | `false` | `""` |

## Outputs

| name | description |
| --- | --- |
| `file_id` | <p>The ID of the file that is sended into Google Drive. Be careful, the ID of the file can also be sensitive data.</p> |

## Runs

This action is a `node20` action.

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
  uses: hankei6km/gdrive-act-send@v0.6.14
  with:
    parent_id: ${{ secrets.PARENT_ID }}
    dest_file_name: ${{ secrets.DEST_FILE_NAME }}
    src_file_name: ${{ secrets.SRC_FILE_NAME }}
```

## Related

- [Google Drive tools Action - share](https://github.com/hankei6km/gdrive-act-share)
- [Google Drive tools Action - recv](https://github.com/hankei6km/gdrive-act-recv)

## Licenses

MIT License

Copyright (c) 2022 hankei6km
