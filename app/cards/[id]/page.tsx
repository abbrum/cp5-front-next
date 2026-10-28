'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import FavoriteButton from '@/components/FavoriteButton'
import { API_URL } from '@/components/CardList'
import { Pokemon, ResponsePokemonList } from '@/types/pokemon.type'

export default function CardDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const [card, setCard] = useState<Pokemon | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${API_URL}?q=id:${id}`)
      .then((res) => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then((data: ResponsePokemonList) => {
        if (!data.data[0]) throw new Error()
        setCard(data.data[0])
      })
      .catch(() => setError('Erro ao carregar a carta.'))
  }, [id])

  if (error) return <p className="text-red-600">{error}</p>
  if (!card) return <p>Carregando...</p>

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded shadow">
      <Image src={card.images.large} alt={card.name} width={367} height={512} />
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{card.name}</h1>
        <p>Número: #{card.nationalPokedexNumbers?.[0] ?? '—'}</p>
        <p>HP: {card.hp ?? '—'}</p>
        <p>Tipos: {card.types?.join(', ') ?? '—'}</p>
        <p>Raridade: {card.rarity ?? '—'}</p>
        <p>Coleção: {card.set.name} ({card.set.releaseDate})</p>
        <p>Ilustrador: {card.artist ?? '—'}</p>

        {card.attacks && (
          <div>
            <h2 className="text-xl font-bold mt-2">Ataques</h2>
            {card.attacks.map((attack) => (
              <p key={attack.name}>
                <strong>{attack.name}</strong> {attack.damage} — {attack.text}
              </p>
            ))}
          </div>
        )}

        <FavoriteButton card={card} />
      </div>
    </div>
  )
}
