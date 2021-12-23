import { IProduct } from '../../interfaces/index'
import { Button } from '../button'
import { Headline } from '../headline'
import { Paragraph } from '../paragraph'
import { Picture } from '../picture'
import { Rating } from '../rating'

import styles from './product-card.module.css'
import classnames from 'classnames'
import { Ellipsis } from '../ellipsis'

interface ICardProductProps {
  product: IProduct
}

export function ProductCard(props: ICardProductProps) {
  const { product } = props
  return (
    <article className={classnames(styles['product'])}>
      <Picture src={product.cover} alt={product.title} />
      <div>
        <Headline type='h3'>
          <Ellipsis>{product.large_title}</Ellipsis>
        </Headline>
        <div className={classnames(styles['utils'])}>
          <span>{product.price}</span>
          <Rating />
        </div>
        <Paragraph>
          <Ellipsis line='2'>{product.description}</Ellipsis>
        </Paragraph>
        <div className={classnames(styles['buttons'])}>
          <Button>buy now</Button>
          <Button color='secondary'>add to cart</Button>
        </div>
      </div>
    </article>
  )
}
