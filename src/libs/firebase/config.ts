import { request } from "../requests"

export const uploadApi = async (
  file: File,
): Promise<{
  url: string
}> => {
  const formData = new FormData()
  formData.append('file', file)

  const response = await request.post('/upload/single', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export const uploadMultipleApi = async (
  files: File[],
): Promise<{
  urls: string[]
}> => {
  const formData = new FormData()
  for (const file of files) {
    formData.append('files', file)
  }
  const response = await request.post('/upload/multiple', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}
