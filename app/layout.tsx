import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Minhas Cartas Favoritas',
  description: 'Checkpoint FIAP - Pokémon TCG',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <div className="flex-1">{children}</div>
        <footer className="bg-gray-800 text-white text-center p-4">
          Ana Paula Cunha Brum- RM571359 / Victor Felipe Silva Alencar - RM574057
        </footer>
      </body>
    </html>
  )
}
