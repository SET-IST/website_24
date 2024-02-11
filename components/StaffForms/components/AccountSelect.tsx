import { useRef, useState } from 'react'
import {
  Avatar,
  Badge,
  Combobox,
  Group,
  Loader,
  TextInput,
  useCombobox,
  Text,
  CloseButton,
} from '@mantine/core'
import { IconQrcode } from '@tabler/icons-react'
import { useUserDetails, useUsersSearch } from '@/lib/frontend/hooks'
import { useDebouncedValue } from '@mantine/hooks'
import { FormErrors } from '@mantine/form/lib/types'
import { User } from '@prisma/client'
import { StaffScan } from './StaffScan'
import { useBoundStore } from '@/lib/frontend/store'

interface AccountSelectProps {
  errors: FormErrors
  callback: (user: string) => void
}

export function AccountSelect({ errors, callback }: AccountSelectProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  })

  const [query, setQuery] = useState<string | undefined>('')
  const [value, setValue] = useState<string | undefined>('')

  const [debouncedQuery] = useDebouncedValue(query, 200)
  const { data, isLoading } = useUsersSearch(debouncedQuery)

  const options = (data || []).map((item, index) => (
    <Combobox.Option value={JSON.stringify(item)} key={'option_' + index}>
      <Group wrap="nowrap">
        <Avatar src={item.image} radius="xl" />
        <div style={{ flex: 1 }}>
          <div className="flex flex-row items-center gap-2">
            <Text size="sm" fw={500}>
              {item.name}
            </Text>
            <Badge size="sm">{item.role}</Badge>
          </div>

          <Text c="dimmed" size="xs">
            {item.email}
          </Text>
          <Text c="dimmed" size="xs">
            {item.id}
          </Text>
        </div>
      </Group>
    </Combobox.Option>
  ))

  // Setters
  const showScanModal = useBoundStore((state) => state.showStaffScanModal)

  return (
    <>
      <Combobox
        onOptionSubmit={(optionValue) => {
          setValue((JSON.parse(optionValue) as User).id)
          callback(optionValue)
          combobox.closeDropdown()
        }}
        withinPortal={false}
        store={combobox}
      >
        <Combobox.Target>
          <TextInput
            label="Conta"
            description="As contas podem ser encontradas pelo nome, email ou UUID"
            placeholder="Procurar"
            required
            value={value ?? query}
            onChange={(event) => {
              setValue(undefined)
              setQuery(event.currentTarget.value)
              combobox.resetSelectedOption()
              combobox.openDropdown()
            }}
            onClick={() => combobox.openDropdown()}
            onFocus={() => {
              combobox.openDropdown()
            }}
            onBlur={() => combobox.closeDropdown()}
            rightSection={
              isLoading ? (
                <Loader size={18} />
              ) : (
                <CloseButton
                  onClick={() => showScanModal(true)}
                  icon={<IconQrcode size={26} stroke={1.5} />}
                />
              )
            }
            error={errors['uuid']}
          />
        </Combobox.Target>

        <Combobox.Dropdown hidden={data === null}>
          <Combobox.Options>
            {options}
            {data?.length === 0 && (
              <Combobox.Empty>Sem resultados</Combobox.Empty>
            )}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
      <StaffScan
        queryHook={useUserDetails}
        callback={(data) => {
          setValue((JSON.parse(data) as User).id)
          setQuery((JSON.parse(data) as User).id)
          callback(data)
          combobox.resetSelectedOption()
          combobox.openDropdown()
        }}
      />
    </>
  )
}
