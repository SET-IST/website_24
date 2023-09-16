import { FaTimes } from 'react-icons/fa'
//  Hooks
import { useModal } from '../../../../../core/components/modal-context'
//  Components
import FileUploadForm from '../../../../FileUploadForm'
//  Types
import { useUpload } from '@/lib/hooks/use-upload'
import type { Dispatch, SetStateAction } from 'react'

const UploadCvModal = () => {
  const { closeModal } = useModal()
  const { setCv } = useUpload()

  const validateFileHandler = (file: File) => {
    if (file.type !== 'application/pdf') {
      alert('Por favor, seleciona um ficheiro pdf')
      return
    }
  }

  const onUploadHandler = async (
    formData: FormData,
    setUploading: Dispatch<SetStateAction<boolean>>
  ) => {
    await setCv(formData)
      .then(() => {
        closeModal()
      })
      .catch(() => {
        alert('Desculpa! Houve um problema.')
        return
      })
      .finally(() => {
        setUploading(false)
      })
  }

  return (
    <div className="px-3">
      <header className="flex flex-row items-center justify-between py-3">
        <h1>Carregar Curriculum Vitae</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      <FileUploadForm
        onUpload={onUploadHandler}
        validateFile={validateFileHandler}
        selectText="Seleciona um ficheiro"
        uploadButtonText="Carregar"
        deleteButtonText="Apagar"
        noFileErrorText="Nenhum ficheiro selecionado"
      />
      <hr />
      <section className="py-2">
        <p>Regulamento de Submissão de Currículos</p>
        <div className="overflow-y-auto h-80 mt-2">
          <div>
            <h3 className="text-sm">1. Objectivo</h3>
            <p className="text-xs">
              <b>a)</b> O presente documento tem por objectivo definir as
              condições para a submissão de currículos através da plataforma
              disponibilizada pela equipa da edição de 2023 do evento SET –
              Semana Empresarial e Tecnológica, a decorrer entre os dias 13 a 16
              de Março de 2023 no campus Taguspark do Instituto Superior
              Técnico, sito em Avenida Professor Doutor Cavaco Silva, 2744 -016
              Porto Salvo, Portugal.
            </p>
            <p> &nbsp;</p>
            <h3 className="text-sm">2. Informações</h3>
            <p className="text-xs">
              <b>a)</b> O evento SET – Semana Empresarial e Tecnológica é
              organizado pelo núcleo LAGE2 – Laboratório de Apoio à Gestão de
              Actividades Extracurriculares dos Estudantes, registado como
              associação MSSKILLSLAB – Núcleo de Apoio À Gestão de Actividades
              Extra-Curriculares dos Estudantes, com sede em Instituto Superior
              Técnico – Campus Taguspark, Avenida Professor Doutor Cavaco Silva,
              2744-016 Porto Salvo, Portugal.
            </p>
            <p className="text-xs">
              <b>b)</b> A plataforma de submissão de currículos do evento SET
              2023 é uma plataforma onde participantes do evento SET 2023 podem
              submeter os seus currículos, em formato digital PDF, para consulta
              das empresas que participam no mesmo evento.
            </p>
            <p className="text-xs">
              <b>c)</b> O website do evento SET
              (https://set.tecnico.ulisboa.pt/) está hospedado nos servidores do
              Instituto Superior Técnico, localizados em Portugal.
            </p>
            <p> &nbsp;</p>
            <h3 className="text-sm">
              3. Condições do tratamento dos currículos e da plataforma
            </h3>
            <p className="text-xs">
              <b>a)</b> Os currículos submetidos, em formato digital PDF, estão
              alojados nos servidores do Instituto Superior Técnico, localizados
              em Portugal.
            </p>
            <p className="text-xs">
              <b>b)</b> Apenas empresas que participam na edição da SET de 2023
              (divulgadas em tempo próprio em https://set.tecnico.ulisboa.pt/)
              têm acesso à plataforma.
            </p>
            <p className="text-xs">
              <b>c)</b> A equipa do evento SET 2023 fornece credenciais de
              acesso à plataforma a cada empresa, sendo que cada empresa se
              compromete a que a credencial dada seja apenas usada por
              colaboradores da empresa.
            </p>
            <p className="text-xs">
              <b>d)</b> Os currículos submetidos estarão disponíveis na
              plataforma durante um ano após a sua submissão, sendo que a equipa
              do evento SET reserva o direito a apagar os ficheiros submetidos
              antes do prazo.
            </p>
            <p className="text-xs">
              <b>e)</b> Cada empresa compromete-se a apagar o(s) currículo(s)
              descarregado(s) um ano após o seu descarregamento a partir da
              plataforma disponibilizada.
            </p>

            <p> &nbsp;</p>

            <p className="text-xs">Porto Salvo, 20 de Janeiro de 2022</p>
          </div>
        </div>
      </section>
      <hr />
      <footer className="text-xs py-3">
        De modo a conseguires agarrar a oportunidade que procuras, tenta
        carregar a versão mais atualizada do teu CV.
      </footer>
    </div>
  )
}

export default UploadCvModal
