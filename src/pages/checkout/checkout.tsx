import { Button } from 'src/components/button'
import { Cart } from 'src/components/cart'
import { Form } from 'src/components/form'
import { Headline } from 'src/components/headline'
import { InputText } from 'src/components/inputText'
import { Table } from 'src/components/table'
import { Wrapper } from 'src/components/wrapper'

import { tableHeadlines } from 'src/constants'

import { productsMocks } from '../../mocks/products'

import styles from './checkout.module.css'

export function Checkout() {
  return (
    <main>
      <Wrapper>
        <Headline type='h1'>Carrito de Compras</Headline>
        <div className={styles['checkout-content']}>
          <Table>
            <Table.Head>
              {tableHeadlines.map(headline => (
                <span key={headline}>{headline}</span>
              ))}
            </Table.Head>
            <Table.Body>
              {productsMocks.map(product => (
                <Cart key={product.id} product={product} />
              ))}
            </Table.Body>
          </Table>
          <section className={styles['checkout-form-content']}>
            <div className={styles['total']}>
              <span className={styles['total-title']}>total:</span>
              <span>250000</span>
            </div>
            <Form className='checkout-form'>
              <Headline type='h3'>datos personales</Headline>
              <div className={styles['personal-data']}>
                <InputText
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name Example'
                  className='name'
                />
                <InputText
                  type='text'
                  name='lastName'
                  id='lastName'
                  className='lastName'
                  placeholder='Last Name'
                />
                <InputText
                  type='email'
                  name='email'
                  id='email'
                  className='email'
                  placeholder='example@example.com'
                />
              </div>
              <Headline type='h3'>Metodo de pago</Headline>
              <div>
                <div className={styles['pay-method']}>
                  <InputText
                    type='text'
                    pattern='[0-9\s]{13,19}'
                    id='card'
                    name='card'
                    placeholder='02255203452'
                    inputMode='numeric'
                    autoComplete='cc-number'
                    className='card'
                  />
                  <InputText
                    type='text'
                    pattern='/^\d{2}\/\d{2}$/"'
                    id='date'
                    placeholder='02/21'
                    name='date'
                    inputMode='numeric'
                    className='date'
                    autoComplete='cc-exp'
                  />
                  <InputText
                    type='text'
                    pattern='/^\d{3}$/'
                    id='cvv'
                    placeholder='000'
                    name='cvv'
                    inputMode='numeric'
                    className='cvv'
                    autoComplete='cc-csc'
                  />
                </div>
              </div>
              <Button>pagar ahora</Button>
            </Form>
          </section>
        </div>
      </Wrapper>
    </main>
  )
}
