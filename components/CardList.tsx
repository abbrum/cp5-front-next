'use client'

import { useEffect, useState } from 'react'
import { Pokemon, ResponsePokemonList } from '@/types/pokemon.type'
import PokemonCard from './PokemonCard'

export const API_URL = 'https://next-cp6.vercel.app/api/pokemon'

export default function CardList() {
  const [search, setSearch] = useState('')
  const [cards, setCards] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false

    const timer = setTimeout(() => {
      const query = search.trim() ? `q=name:${search.trim()}*&` : ''

      fetch(`${API_URL}?${query}orderBy=number,name&pageSize=15`)
        .then((res) => {
          if (!res.ok) throw new Error()
          return res.json()
        })
        .then((data: ResponsePokemonList) => {
          if (ignore) return
          setCards(data.data)
          setError('')
        })
        .catch(() => {
          if (!ignore) setError('Erro ao buscar as cartas.')
        })
        .finally(() => {
          if (!ignore) setLoading(false)
        })
    }, 500)

    return () => {
      ignore = true
      clearTimeout(timer)
    }
  }, [search])

  const handleSearch = (value: string) => {
    setSearch(value)
    setLoading(true)
  }

  const renderCards = () => {
    if (loading) return <p>Carregando...</p>
    if (error) return <p className="text-red-600">{error}</p>
    if (cards.length === 0) return <p>Nenhuma carta encontrada.</p>

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <PokemonCard key={card.id} card={card} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Buscar carta pelo nome..."
        className="p-2 border rounded bg-white"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {renderCards()}
    </div>
  )
}
