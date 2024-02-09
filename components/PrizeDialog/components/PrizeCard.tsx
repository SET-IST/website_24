import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'
import { QRCode } from 'react-qrcode-logo'

export function PrizeCard() {
  return (
    <Card
      className="h-fit !rounded-lg"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
    >
      <Card.Section>
        <QRCode fgColor="#1C7ED6" eyeRadius={5} qrStyle="dots" value="lolo" />
      </Card.Section>

      <Card.Section>
        <div className="flex flex-col justify-normal items-center border-t p-2">
          <Badge color="blue">Prémio normal</Badge>
        </div>
      </Card.Section>
    </Card>
  )
}
