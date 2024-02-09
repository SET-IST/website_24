import { Award } from '@/lib/frontend/api'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'
import { AwardType } from '@prisma/client'
import { QRCode } from 'react-qrcode-logo'

interface PrizeCardProps {
  award: Award
}

export function PrizeCard({ award }: PrizeCardProps) {
  return (
    <Card
      className="h-fit !rounded-lg"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <QRCode
          fgColor="#1C7ED6"
          eyeRadius={5}
          qrStyle="dots"
          value={award?.id}
        />
      </Card.Section>

      <Card.Section>
        <div className="flex flex-col justify-normal items-center border-t p-2">
          {award?.type === AwardType.NORMAL && (
            <Badge color="blue">Prémio normal</Badge>
          )}
          {award?.type === AwardType.SPECIAL && (
            <Badge color="indigo">Prémio bónus</Badge>
          )}
        </div>
      </Card.Section>
    </Card>
  )
}
