'use client'

import { uploadApi } from '@/libs/firebase'
import { ACCEPTED_IMAGE_TYPES, MAX_IMAGE_FILE_SIZE } from '@/libs/utils'
import {
  ActionIcon,
  Box,
  Button,
  CloseButton,
  Group,
  Input,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core'
import { Dropzone, type FileRejection } from '@mantine/dropzone'
import { IconMinus } from '@tabler/icons-react'
import Image from 'next/image'
import { useState } from 'react'
import { type Control, useFieldArray } from 'react-hook-form'
import type { ArrayPath, FieldArray, FieldValues, Path } from 'react-hook-form'
import { TextInput } from '../TextInput'

interface ImageUploaderProps<T extends FieldValues> {
  control: Control<T>
  name: ArrayPath<T>
}

interface PreviewImage {
  file: File
  preview: string
}

export function ImageUploader<T extends FieldValues>({
  control,
  name,
}: ImageUploaderProps<T>) {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  })

  const [previewImages, setPreviewImages] = useState<PreviewImage[]>([])
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleDrop = (files: File[]) => {
    setError(null)
    const newPreviewImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }))

    console.log('newPreviewImages', newPreviewImages)

    setPreviewImages((prev) => [...prev, ...newPreviewImages])
  }

  const handleReject = (fileRejections: FileRejection[]) => {
    const errorMessages = fileRejections.map((rejection) => {
      if (rejection.errors[0].code === 'file-too-large') {
        return `File "${rejection.file.name}" vượt quá kích thước cho phép (10MB).`
      }
      if (rejection.errors[0].code === 'file-invalid-type') {
        return `File "${rejection.file.name}" không đúng định dạng. Chỉ chấp nhận các file ảnh.`
      }
      return `Lỗi khi tải lên file "${rejection.file.name}": ${rejection.errors[0].message}`
    })

    setError(errorMessages.join(' '))
  }

  const handleSave = async () => {
    setIsLoading(true)
    setError(null)
    try {
      for (const previewImage of previewImages) {
        const imageUrl = await uploadApi(previewImage.file)
        append({ url: imageUrl } as FieldArray<T, ArrayPath<T>>)
      }
      setPreviewImages([])
    } catch (error) {
      console.error('Upload failed:', error)
      setError('Không thể tải ảnh lên. Vui lòng thử lại.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemovePreview = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleCancel = () => {
    setPreviewImages([])
    setError(null)
  }

  return (
    <Box>
      <Input.Label fw={600} mb={8}>
        Hình ảnh
      </Input.Label>

      <Box style={{ position: 'relative' }}>
        <LoadingOverlay
          visible={isLoading}
          overlayProps={{ radius: 'sm', blur: 2 }}
        />
        <Dropzone
          onDrop={handleDrop}
          onReject={handleReject}
          accept={ACCEPTED_IMAGE_TYPES}
          multiple
          maxSize={MAX_IMAGE_FILE_SIZE}
          mb="xs"
          styles={{
            root: {
              borderStyle: 'dashed',
              borderWidth: '2px',
              height: '60px',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              cursor: 'pointer',
            },
          }}
        >
          <Text>Kéo thả hoặc nhấp để chọn ảnh</Text>
        </Dropzone>
      </Box>

      {error && (
        <Text c="red" size="sm" mb="xs">
          {error}
        </Text>
      )}

      {previewImages.length > 0 && (
        <>
          <SimpleGrid cols={3} spacing="md" mb="md">
            {previewImages.map((image, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Box key={index} style={{ position: 'relative' }}>
                <Image
                  src={image.preview}
                  alt={`Preview ${index}`}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover' }}
                />
                <CloseButton
                  style={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    background: 'white',
                    borderRadius: '50%',
                  }}
                  onClick={() => handleRemovePreview(index)}
                />
              </Box>
            ))}
          </SimpleGrid>

          <Group justify="flex-end" mb="md">
            <Button
              onClick={handleCancel}
              variant="outline"
              disabled={isLoading}
            >
              Hủy
            </Button>
            <Button onClick={handleSave} loading={isLoading}>
              {isLoading ? 'Đang tải lên...' : 'Lưu'}
            </Button>
          </Group>
        </>
      )}

      <Stack gap={12} mt={12}>
        {fields.map((field, index) => (
          <Stack key={field.id} gap={2}>
            <TextInput
              readOnly
              name={`${name}.${index}.url` as Path<T>}
              control={control}
              rightSection={
                fields.length > 1 && (
                  <ActionIcon
                    opacity={0.5}
                    variant="transparent"
                    onClick={() => remove(index)}
                  >
                    <IconMinus size={24} />
                  </ActionIcon>
                )
              }
            />
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}
