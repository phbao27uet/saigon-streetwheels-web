import { getApp, getApps, initializeApp } from 'firebase/app'
import {
  type FullMetadata,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

if (getApps().length === 0) {
  initializeApp(firebaseConfig)
}

const fbApp = getApp()
const fbStorage = getStorage()

export { fbApp, fbStorage }

const generateFirebaseStoragePath = (path: string) => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth() + 1
  const day = currentDate.getDate()

  return `travel/images/${year}/${month}/${day}/${path}`
}

export const uploadToFirebase = async (
  file: File,
  onProgress: (progress: number) => void,
): Promise<{
  downloadUrl: string
  metadata: FullMetadata
}> => {
  if (file) {
    const storeRef = ref(fbStorage, generateFirebaseStoragePath(file.name))

    console.log('storeRef', storeRef)

    const uploadTask = uploadBytesResumable(storeRef, file)

    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          onProgress?.(progress)
        },
        (error) => {
          console.log(error)
          reject(error)
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
          resolve({
            downloadUrl,
            metadata: uploadTask.snapshot.metadata,
          })
        },
      )
    })
  }

  return {
    downloadUrl: '',
    metadata: {} as FullMetadata,
  }
}

export const uploadMultipleToFirebase = async (
  files: File[],
  onProgress: (progress: number) => void,
): Promise<
  Array<{
    downloadUrl: string
    metadata: FullMetadata
  }>
> => {
  if (!files.length) {
    return []
  }

  const uploadPromises = files.map((file) => {
    const storeRef = ref(fbStorage, generateFirebaseStoragePath(file.name))
    const uploadTask = uploadBytesResumable(storeRef, file)

    return new Promise<{ downloadUrl: string; metadata: FullMetadata }>(
      (resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            onProgress?.(progress)
          },
          (error) => {
            console.log(error)
            reject(error)
          },
          async () => {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref)
            resolve({
              downloadUrl,
              metadata: uploadTask.snapshot.metadata,
            })
          },
        )
      },
    )
  })

  return Promise.all(uploadPromises)
}
