export interface Attack {
  name: string
  damage: string
  text: string
}

export interface Pokemon {
  id: string
  name: string
  hp?: string
  types?: string[]
  nationalPokedexNumbers?: number[]
  images: {
    small: string
    large: string
  }
  rarity?: string
  artist?: string
  attacks?: Attack[]
  set: {
    name: string
    releaseDate: string
  }
}

export interface ResponsePokemonList {
  data: Pokemon[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}
