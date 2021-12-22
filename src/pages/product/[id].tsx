import { Button } from 'src/components/button'
import { Headline } from 'src/components/headline'
import { Paragraph } from 'src/components/paragraph'
import { Picture } from 'src/components/picture'
import { Rating } from 'src/components/rating'
import { Wrapper } from 'src/components/wrapper'

import { IProduct } from '../../interfaces/index'

import styles from './[id].module.css'

interface IProductProps {
  product: IProduct
}

export function Product(props: IProductProps) {
  const { product } = props

  return (
    <main className={styles['product']}>
      <Wrapper>
        <div className={styles['product-content']}>
          <section className={styles['product-details']}>
            <Picture src={product.cover} alt={product.large_title} />
            <div>
              <Headline type='h1'>{product.title}</Headline>
              <div className={styles['utils']}>
                <span>{product.price}</span>
                <Rating />
              </div>
              <Paragraph>{product.description}</Paragraph>
              <div className={styles['buttons']}>
                <Button>buy now</Button>
                <Button color='secondary'>add to cart</Button>
              </div>
            </div>
          </section>
          <section className={styles['product-features']}>
            <Headline type='h3'> Características de {product.title}</Headline>
            <ul>
              {product.features.map(feature => (
                <li>{feature}</li>
              ))}
            </ul>
          </section>
        </div>
      </Wrapper>
    </main>
  )
}
