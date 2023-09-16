type GoogleEvent = {
    id: string,
    summary: string,
    description: string,
    start: any,
    end: any,
    location: string,
}
enum EventType {
    WORKSHOP = 'Workshop',
    PAINEL = 'Painel',
    PALESTRA = 'Palestra',
    EMPRESA = 'Apresentação',
    ATIVIDADES = 'Atividades',
}

export { EventType }
export type {
    GoogleEvent
}

