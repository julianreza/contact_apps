'use client'
import store from '@/store'
import { Provider } from 'react-redux'
// import { makeStore, AppStore } from '../lib/store'

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {

  return <Provider store={store}>{children}</Provider>
}