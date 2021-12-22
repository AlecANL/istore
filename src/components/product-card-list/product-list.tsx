import { IProduct } from '../../interfaces'
import classnames from 'classnames'

import styles from './product-list.module.css'

interface IProducTListProps {
  children: (product: IProduct) => JSX.Element
  products: IProduct[]
}

export function ProductList(props: IProducTListProps) {
  const { children, products } = props

  return (
    <section className={classnames(styles['product-list'])}>
      {products.map(children)}
    </section>
  )
}
