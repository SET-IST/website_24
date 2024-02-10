import { useBoundStore } from '@/lib/frontend/store'
import { Text, Modal, Transition, Badge, Button } from '@mantine/core'
import { PrizeCard } from './components'
import { useProfile } from '@/lib/frontend/hooks'
import { StudentProfile } from '@/lib/frontend/api'
import { useAward } from '@/lib/frontend/hooks/student'

export function PrizeDialog() {
  // Getters
  const isVisible = useBoundStore((state) => state.redeemModalVisible)

  // Setters
  const showRedeemModal = useBoundStore((state) => state.showRedeemModal)

  const { data, isLoading: isUserLoading, isError: isUserError } = useProfile()

  const {
    data: awardData,
    isSuccess: awardLoaded,
    error: awardError,
  } = useAward()

  const notEnoughPoints = awardError?.response?.status === 400

  const user = data as StudentProfile

  return (
    <Modal
      opened={isVisible}
      onClose={() => showRedeemModal(false)}
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
        <div className="grow flex flex-col items-center gap-8 mt-16">
          <div className="flex flex-col gap-8">
            <div>
              <Text c="white" ta="center" fz={25} fw={700}>
                Olá {user?.name.split(' ')[0]}
              </Text>
              <Text c="white" ta="center" fz="lg" fw={500}>
                Tens <strong>{user?.studentDetails?.points}</strong> pontos por
                gastar
              </Text>
              {notEnoughPoints && (
                <Text c="white" ta="center" fz="md" fw={500}>
                  Faltam-te{' '}
                  <strong>{40 - (user?.studentDetails?.points ?? 0)}</strong>{' '}
                  pontos para teres um brinde
                </Text>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col items-center gap-4">
                <Transition
                  mounted={awardLoaded}
                  transition="slide-up"
                  duration={200}
                  timingFunction="ease"
                  keepMounted
                >
                  {(styles) => (
                    <div
                      className="w-full flex flex-col gap-4 items-center"
                      style={styles}
                    >
                      <PrizeCard award={awardData} />
                    </div>
                  )}
                </Transition>
              </div>
            </div>
          </div>

          {awardLoaded && (
            <div>
              <Text c="white" ta="center" fz="sm" fw={500}>
                Apresenta este código na receção para reclamares o teu brinde
              </Text>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}
