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
- name: Collect
  id: collect
  uses: hankei6km/collect-labels-from-release-note@v0.2.0
  with:
    token: ${{ secrets.GITHUB_TOKEN}}
    repository: hankei6km/collect-labels-from-release-note
    tag_name: v0.2.x
- name: Contains item
  run: test "${CONTAIN}" = "true"
  env:
    CONTAIN: ${{ contains(toJson(steps.collect.outputs.labels), 'testing') }}
```

## Licenses

MIT License

Copyright (c) 2022 hankei6km
