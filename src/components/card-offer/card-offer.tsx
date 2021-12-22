import classnames from 'classnames'

import { Button } from '../button'
import { Picture } from '../picture'

import styles from './card-offer.module.css'

export function CardOffer() {
  return (
    <>
      <article className={classnames(styles['card'])}>
        <div className={classnames(styles['card-description'])}>
          <h3>Awesome Text</h3>
          <Button>Buy now</Button>
        </div>
        <Picture src='/assets/images/apple-watch.png' alt='apple watch image' />
      </article>
    </>
  )
}
