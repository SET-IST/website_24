import { rem } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconCheck, IconX } from '@tabler/icons-react'

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

export const showInfoNotification = (props: NotificationProps) => {
  notifications.show({
    ...props,
    color: 'blue',
    autoClose: 1000,
  })
}

export const showSuccessNotification = (props: NotificationProps) => {
  notifications.show({
    ...props,
    color: 'teal',
    icon: <IconCheck style={{ width: rem(20), height: rem(20) }}/>
  })
}
