import { configureStore } from '@reduxjs/toolkit'
import usersReducer from '../features/usersSlice'
import subscribeReducer from '../features/subscribeSlice'
import sectionReducer from '../features/sectionSlice'

export const store = configureStore({
  reducer: {
    user:usersReducer,
    subscribe:subscribeReducer,
    section:sectionReducer
  },
})