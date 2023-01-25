"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import NavBarComp from '@/components/Navbar/NavBarComp'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Carrousel from '@/components/carrousel/Carrousel'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Provider store={store}>
      <main style={{}} >
        <NavBarComp />
        {/* <Toolbar /> */}
        <Carrousel />
      </main>
    </Provider>
  )
}
