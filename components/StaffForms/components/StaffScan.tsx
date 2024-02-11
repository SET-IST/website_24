import { useBoundStore } from '@/lib/frontend/store'
import { Text, Modal, Transition, Badge } from '@mantine/core'
import { QrReader } from 'react-qr-reader'
import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'
import { showErrorNotification } from '@/components/Notifications'
import { useUserDetails } from '@/lib/frontend/hooks'

interface StaffScanProps {
  queryHook: typeof useUserDetails
  callback: (data: string) => void
}

export function StaffScan({ queryHook, callback }: StaffScanProps) {
  const [code, setCode] = useState<string | undefined>(undefined)

  const { data, isError, error } = queryHook(code!, !!code)

  // Getters
  const isVisible = useBoundStore((state) => state.staffScanModalVisible)

  // Setters
  const showScanModal = useBoundStore((state) => state.showStaffScanModal)

  useEffect(() => {
    if (isError) {
      if (error.response?.status !== 404) {
        showErrorNotification({
          title: `Ocorreu um erro, por favor tenta outra vez`,
          message: error.message,
        })
      }
      setTimeout(() => {
        setCode(undefined)
      }, 2000)
    }
  }, [isError, error])

  useEffect(() => {
    if (!!data) {
      callback(JSON.stringify(data))
      showScanModal(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <Modal
      opened={isVisible}
      onClose={() => showScanModal(false)}
      styles={{
        content: {
          backgroundColor: 'rgb(28, 126, 214)',
        },
        body: {
          padding: '0px',
        },
        header: {
          backgroundColor: 'transparent',
        },
      }}
      fullScreen
      radius={0}
      transitionProps={{ transition: 'scale-y', duration: 200 }}
      withCloseButton={false}
    >
      <div className="h-screen p-4 flex flex-col">
        <div className="w-full flex justify-end">
          <Modal.CloseButton
            iconSize={25}
            className="!text-white hover:!text-[#1C7ED6] hover:bg-white"
          />
        </div>
        <div className="grow flex flex-col items-center justify-start mt-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col items-center gap-4">
              <Text c="white" ta="center" fz={25} fw={700} mt="md">
                Scan de utilizador
              </Text>
              <div className="w-44 h-44 border-2 rounded-xl">
                <QrReader
                  constraints={{
                    facingMode: 'environment',
                    aspectRatio: { ideal: 1 },
                  }}
                  videoStyle={{
                    'border-radius': '0.75rem',
                  }}
                  onResult={(result, error) => {
                    if (result) {
                      setCode(result.getText())
                    }
                  }}
                />
              </div>

              <Transition
                mounted={isError && error.response?.status === 404}
                transition="fade"
                duration={200}
                timingFunction="ease"
                keepMounted
              >
                {(styles) => (
                  <Badge style={styles} color="blue" size="lg" radius="md">
                    {error?.response?.status === 404 &&
                      'Este código é inválido'}
                  </Badge>
                )}
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
