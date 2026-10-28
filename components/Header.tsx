'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Header() {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('favorites')
    localStorage.removeItem('token')
    router.push('/')
  }

  return (
    <header className="flex justify-between items-center bg-red-600 text-white p-4">
      <Link href="/cards" className="text-xl font-bold">
        Minhas Cartas Favoritas
      </Link>
      <button className="bg-white text-red-600 px-4 py-2 rounded" onClick={handleLogout}>
        Logout
      </button>
    </header>
  )
}
