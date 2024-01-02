import { notifications } from '@mantine/notifications'
import { IconX } from '@tabler/icons-react'

export interface NotificationProps {
  title?: string
  message: string
}

export const showErrorNotification = (props: NotificationProps) => {
  notifications.show({
    ...props,
    color: 'red',
    icon: <IconX />,
  })
}
