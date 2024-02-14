import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import { Button, NumberInput, Text } from '@mantine/core'
import { AccountSelect } from './components'
import { User, UserType } from '@prisma/client'
import { useEffect, useState } from 'react'
import { useUpdateStudentPoints, useUserDetails } from '@/lib/frontend/hooks'
import { StudentProfile } from '@/lib/frontend/api'
import { useQueryClient } from '@tanstack/react-query'
import {
  showErrorNotification,
  showSuccessNotification,
} from '../Notifications'

interface FormValues {
  uuid?: string
  points?: number
}

const PointsManagementForm = () => {
  const schema = Yup.object().shape({
    uuid: Yup.string()
      .uuid('UUID inválido')
      .required('É necessário fornecer um UUID válido'),
    points: Yup.number()
      .positive('O número de pontos tem de ser positivo')
      .max(1000, 'Valor máximo de pontos: 1000'),
  })

  const form = useForm<FormValues>({
    validate: yupResolver(schema),
    initialValues: {
      uuid: undefined,
      points: undefined,
    },
  })

  const { data: userDetails } = useUserDetails(form.values.uuid)

  const isValidUser = !!userDetails && userDetails.role !== UserType.Company

  const { mutateAsync: updatePoints, isLoading } = useUpdateStudentPoints(
    useQueryClient()
  )

  useEffect(() => {
    !!userDetails &&
      form.setFieldValue(
        'points',
        (userDetails as StudentProfile)?.studentDetails?.points
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetails])

  const addPoints = (points: number) => {
    if (form.values.points) {
      form.setFieldValue('points', form.values.points + points)
    }
  }

  const updateStudentPoints = (values: FormValues) => {
    if (!values.uuid || !values.points) return

    updatePoints({
      uuid: values.uuid,
      points: values.points,
    })
      .then(() => {
        showSuccessNotification({
          message: 'Pontos atualizados',
        })
      })
      .catch((error) => {
        showErrorNotification({
          title: `Ocorreu um erro, por favor tenta outra vez`,
          message: error.message,
        })
      })
  }

  return (
    <div className="h-fit p-4">
      <Text c="#00415a" fz="xl" fw={700}>
        STAFF - Gestão de pontos
      </Text>
      <form
        onSubmit={form.onSubmit(updateStudentPoints)}
        className="mt-4 flex flex-col gap-2"
      >
        <AccountSelect
          callback={(userData) => form.setFieldValue('uuid', userData.id)}
          errors={form.errors}
        />

        <NumberInput
          required
          disabled={!isValidUser}
          label="Pontuação atual"
          {...form.getInputProps('points')}
          allowNegative={false}
        />
        <Button.Group orientation="vertical">
          <Button
            disabled={!isValidUser}
            onClick={() => addPoints(10)}
            fullWidth
            variant="default"
          >
            Scan (+10)
          </Button>
          <Button
            disabled={!isValidUser}
            onClick={() => addPoints(50)}
            fullWidth
            variant="default"
          >
            Todas as bancas (+50)
          </Button>
          <Button
            disabled={!isValidUser}
            onClick={() => addPoints(20)}
            fullWidth
            variant="default"
          >
            Atividade (+20)
          </Button>
          <Button
            disabled={!isValidUser}
            onClick={() => {
              form.setFieldValue(
                'points',
                (userDetails as StudentProfile)?.studentDetails?.points
              )
            }}
            fullWidth
            variant="default"
          >
            Repor
          </Button>
        </Button.Group>

        <div className="flex flex-col sm:flex-row  gap-3 mt-6 sm:mt-4">
          <Button disabled={!isValidUser} loading={isLoading} type="submit">
            Aplicar
          </Button>
        </div>
      </form>
    </div>
  )
}

export { PointsManagementForm }
