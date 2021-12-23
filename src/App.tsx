import React from 'react'

// import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
// import { Product } from './pages/product'

import { Header } from './components/header'
import { Nav } from './components/nav'
import { Form } from './components/form'
import { InputText } from './components/inputText'
import { Button } from './components/button'
import { Picture } from './components/picture'

// import { productsMocks } from './mocks/products'

import { navList } from './constants'

function App() {
  return (
    <div className='App'>
      <Header>
        <Picture
          src='/assets/images/logo.png'
          alt='awesome logo'
          width={40}
          height={40}
        />
        <Nav links={navList} />
        <Form className='search-box'>
          <InputText
            name='search'
            autoComplete='off'
            placeholder='search your products...'
            type='search'
          />
          <Button>
            <i className='icon-search'></i>
          </Button>
        </Form>
        <Button>
          <i className='icon-shopping-cart'></i>
          <span>0</span>
        </Button>
      </Header>
      <Home />
      {/* <Product product={productsMocks[0]} /> */}
      {/* <Checkout /> */}
    </div>
  )
}

export default App
