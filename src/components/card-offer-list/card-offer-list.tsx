import { ICardOffer } from 'src/interfaces'

import styles from './card-offer-list.module.css'
import classnames from 'classnames'

interface ICardOfferProps {
  children: (card: ICardOffer) => JSX.Element
  listCards: ICardOffer[]
}

export function CardOfferList(props: ICardOfferProps) {
  const { children, listCards } = props

  return (
    <section className={classnames(styles['card-offer-list'])}>
      {listCards.map(children)}
    </section>
  )
}
