import { FaTimes } from 'react-icons/fa'
//  Hooks
import { useModal } from '@/core/components/modal-context'
import { useUpload } from '@/lib/hooks/use-upload'
import { useState } from 'react'
//  Components
import FileUploadForm from '@/components/FileUploadForm'
//  Types
import type { AxiosError } from 'axios'
import type { Dispatch, SetStateAction } from 'react'

const UploadImageModal = () => {
  const { closeModal } = useModal()
  const { setProfileImage } = useUpload()
  const [error, setError] = useState<AxiosError<{ error: string }>>()

  const validateFileHandler = (file: File) => {
    if (!file.type.startsWith('image')) {
      alert('Por favor, seleciona uma fotografia válida')
      return
    }
  }

  const onCancelHandler = () => {
    closeModal()
  }

  const onUploadHandler = async (
    formData: FormData,
    setUploading: Dispatch<SetStateAction<boolean>>
  ) => {
    await setProfileImage(formData)
      .then(() => {
        closeModal()
      })
      .catch((e: AxiosError<{ error: string }>) => {
        setError(e)
        return
      })
      .finally(() => {
        setUploading(false)
      })
  }

  return (
    <div className="px-3">
      <header className="flex flex-row items-center justify-between py-3">
        <h1>Carregar fotografia de perfil</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      <FileUploadForm
        onCancel={onCancelHandler}
        onUpload={onUploadHandler}
        validateFile={validateFileHandler}
        selectText="Seleciona uma fotografia"
        uploadButtonText="Carregar"
        deleteButtonText="Apagar"
        noFileErrorText="Nenhuma fotografia selecionada"
        error={error}
      />
      <hr />
      <footer className="text-xs py-3">
        Para te reconhecerem, a <b className="text-primary-500">SET</b>{' '}
        aconselha a carregarem uma fotografia da tua cara, excepto se forem uma
        empresa.
      </footer>
    </div>
  )
}

export default UploadImageModal
