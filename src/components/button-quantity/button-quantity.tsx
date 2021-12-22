import { Button } from '../button'

import styles from './button-quantity.module.css'

export function ButtonQuantity() {
  return (
    <div className={styles['quantity']}>
      <Button color='default'>
        <i className='icon-line'></i>
      </Button>
      <span>0</span>
      <Button color='default'>
        <i className='icon-plus'></i>
      </Button>
    </div>
  )
}
