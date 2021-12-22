import { CardOffer } from 'src/components/card-offer'
import { CardOfferList } from '../../components/card-offer-list'
import { ICardOffer } from 'src/interfaces/index'
import { Hero } from 'src/components/hero'

const listProductsInOffer: ICardOffer[] = [
  {
    id: '1',
    title: '50% discount in apple watch',
    cover: '/assets/images/apple-watch.png',
  },
  {
    id: '2',
    title: '50% discount in headphone',
    cover: '/assets/images/apple-watch.png',
  },
]

export function Home() {
  return (
    <>
      <Hero>
        <CardOfferList listCards={listProductsInOffer}>
          {card => <CardOffer key={card.id} />}
        </CardOfferList>
      </Hero>
    </>
  )
}
