import { rest } from 'msw'

export const handlers = [
    rest.post('http://localhost:3000/subscribe', (req, res, ctx) => {
        return res(ctx.json({ message: 'Subscribed successfully' }))
    }),
    rest.post('http://localhost:3000/unsubscribe', (req, res, ctx) => {
        return res(ctx.json({ message: 'Unsubscribed successfully' }))
    }),
]
