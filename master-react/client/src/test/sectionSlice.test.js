import { configureStore } from '@reduxjs/toolkit'
import sectionReducer, { toggleShow } from '../features/sectionSlice'

describe('section slice', () => {
    let store

    beforeEach(() => {
        store = configureStore({
            reducer: {
                section: sectionReducer
            }
        })
    })

    it('should handle initial state', () => {
        const { section } = store.getState()
        expect(section.show).toBe(true)
    })

    it('should handle toggleShow', () => {
        store.dispatch(toggleShow())
        const { section } = store.getState()
        expect(section.show).toBe(false)
    })
})
