import { subscribeEmail } from '../thunk/subscribeThunk'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { server } from '../mocks/server'

const mockStore = configureMockStore([thunk])

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('dispatches subscribeEmail action', async () => {
    const store = mockStore({})
    await store.dispatch(subscribeEmail({ email: 'test@example.com', subscribed: false }))

    const actions = store.getActions()
    expect(actions[0].type).toBe('subscribe/subscribeEmail/pending')
    expect(actions[1].type).toBe('subscribe/subscribeEmail/fulfilled')
    expect(actions[1].payload).toEqual({ message: 'Subscribed successfully' })
})
