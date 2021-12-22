export interface INavLinks {
  id: string
  value: string
  name: string
}

export interface ICardOffer {
  title: string
  id: string
  cover: string
  description?: string
}

export interface IProduct {
  id: string
  title: string
  description: string
  cover: string
  vote_average: string
  price: number
  discount?: number
}
