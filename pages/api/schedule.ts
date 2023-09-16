
import { GoogleEvent } from "@/components/pages/AtividadesPage/types";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await fetch(process.env.SCHEDULE_URL!, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'GET',
      })
      const responseJson = await response.json();
    if (response.ok) {
    // Parse json
    const events: Event[] = responseJson.items.map((item: GoogleEvent) => {
        if(!item.description) return;
        const body = item.description.trim().split('\n');

        return {
            id: item.id,
            start: JSON.stringify(new Date(item.start.dateTime)),
            end: JSON.stringify(new Date(item.end.dateTime)),
            title: item.summary,
            type: body[0],
            description: body[1] || '',
            location: item.location ||'',
            };
        });
    res.status(200).json(events);
    }
}