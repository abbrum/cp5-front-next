import Image from 'next/image'
import Link from 'next/link'
import { Pokemon } from '@/types/pokemon.type'
import FavoriteButton from './FavoriteButton'

export default function PokemonCard({ card }: { card: Pokemon }) {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 rounded shadow">
      <Link href={`/cards/${card.id}`}>
        <Image src={card.images.large} alt={card.name} width={245} height={342} />
      </Link>
      <h2 className="font-bold">
        #{card.nationalPokedexNumbers?.[0] ?? '—'} - {card.name}
      </h2>
      <p>HP: {card.hp ?? '—'}</p>
      <p>Tipos: {card.types?.join(', ') ?? '—'}</p>
      <FavoriteButton card={card} />
    </div>
  )
}
