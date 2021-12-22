import { IProduct } from '../../interfaces/index'
import { Headline } from '../headline'
import { Picture } from '../picture'
import { ButtonQuantity } from '../button-quantity/button-quantity'

import styles from './cart.module.css'

interface ICartProps {
  product: IProduct
}

export function Cart(props: ICartProps) {
  const { product } = props
  return (
    <article className={styles['cart']}>
      <div className={styles['cart-product']}>
        <Picture
          src={product.cover}
          alt={product.title}
          width={70}
          height={50}
        />
        <div className={styles['cart-title']}>
          <Headline type='h4'>{product.title}</Headline>
        </div>
      </div>
      <span>{product.price}</span>
      <ButtonQuantity />
      <span>{product.price}</span>
    </article>
  )
}
