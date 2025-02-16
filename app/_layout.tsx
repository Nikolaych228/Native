import { store } from '@/store'
import { Provider } from 'react-redux'
import { Slot } from 'expo-router';

import "../global.css"

export default function RootLayout () {
    return (
        <Provider store={store}>
            <Slot />
        </Provider>
    )
}