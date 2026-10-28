'use client'

import { useState } from 'react'
import { Pokemon } from '@/types/pokemon.type'

function getFavorites(): Pokemon[] {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default function FavoriteButton({ card }: { card: Pokemon }) {
  const [isFavorite, setIsFavorite] = useState(() =>
    getFavorites().some((favorite) => favorite.id === card.id)
  )

  const handleFavorite = () => {
    const favorites = getFavorites()

    if (isFavorite) {
      localStorage.setItem('favorites', JSON.stringify(favorites.filter((f) => f.id !== card.id)))
    } else {
      localStorage.setItem('favorites', JSON.stringify([...favorites, card]))
    }

    setIsFavorite(!isFavorite)
  }

  return (
    <button
      onClick={handleFavorite}
      className={`px-3 py-1 rounded border ${isFavorite ? 'bg-yellow-400 border-yellow-400' : 'bg-white'}`}
    >
      {isFavorite ? '★ Favorito' : '☆ Favoritar'}
    </button>
  )
}
