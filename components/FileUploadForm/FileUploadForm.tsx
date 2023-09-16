import Image from 'next/image'
import { Dispatch, SetStateAction, useState } from 'react'
import { FaCloudUploadAlt, FaRegTrashAlt, FaUpload } from 'react-icons/fa'
//  Components
import { Button } from '../../core/components/Button'
//  Types
import type { AxiosError } from 'axios'
import type { ChangeEvent, MouseEvent } from 'react'

type FileUploadFormProps = {
  onCancel?: () => void
  onUpload?: (
    formData: FormData,
    setUploading: Dispatch<SetStateAction<boolean>>
  ) => void
  validateFile?: (file: File) => void
  selectText: string
  uploadButtonText: string
  deleteButtonText: string
  noFileErrorText: string
  maxFiles?: number
  error?: AxiosError<{ error: string }>
}

const FileUploadForm = ({
  onCancel,
  onUpload,
  selectText,
  uploadButtonText,
  deleteButtonText,
  noFileErrorText,
  maxFiles = 1,
  validateFile,
  error,
}: FileUploadFormProps) => {
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target

    if (!fileInput.files || fileInput.files.length === 0) {
      alert(noFileErrorText)
      return
    }

    if (fileInput.files.length > maxFiles) {
      alert(
        `Só podes selecionar, no máximo, ${maxFiles} ficheiro${
          maxFiles > 1 && 's'
        }`
      )
      return
    }

    const file = fileInput.files[0]

    /** File validation*/
    validateFile && validateFile(file)

    /** Setting file state */
    setFile(file) // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)) // we will use this to show the preview of the image

    /** Reset file input */
    e.currentTarget.type = 'text'
    e.currentTarget.type = 'file'
  }

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!previewUrl && !file) {
      setUploading(false)
      return
    }
    setFile(null)
    setPreviewUrl(null)
    setUploading(false)

    onCancel && onCancel()
  }

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setUploading(true)

    if (!file) {
      setUploading(false)
      return
    }

    try {
      const formData = new FormData()
      formData.append('media', file)

      onUpload && onUpload(formData, setUploading)

      setUploading(false)
    } catch (error) {
      console.error(error)
      alert('Desculpa! Houve um problema.')
      setUploading(false)
      return
    }
  }

  return (
    <form className="w-full py-3" onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col md:flex-row gap-1.5">
        <div className="flex-grow">
          {error ? (
            <div>
              <p className="font-semibold">Erro</p>
              <p>{error.response?.data.error}</p>
            </div>
          ) : previewUrl ? (
            <div className="mx-auto w-80">
              <Image
                alt="file uploader preview"
                src={previewUrl}
                width={320}
                height={218}
              />
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-full  transition-colors duration-150 cursor-pointer hover:text-gray-600">
              <FaCloudUploadAlt size={50} />
              <strong className="text-sm font-medium">{selectText}</strong>
              <input
                className="block w-0 h-0"
                name="file"
                type="file"
                onChange={onFileUploadChange}
              />
            </label>
          )}
        </div>
        <div className="flex md:flex-col justify-center gap-1.5">
          <Button
            disabled={!previewUrl}
            onClick={onCancelFile}
            color="danger"
            trailingIcon={<FaRegTrashAlt />}
            isLoading={uploading}
          >
            {deleteButtonText}
          </Button>
          <Button
            disabled={!previewUrl || !!error}
            onClick={onUploadFile}
            color="success"
            trailingIcon={<FaUpload />}
            isLoading={uploading}
          >
            {uploadButtonText}
          </Button>
        </div>
      </div>
    </form>
  )
}

export default FileUploadForm
export type { FileUploadFormProps }
