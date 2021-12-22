import React from 'react'

import { Home } from './pages/home'

import { Header } from './components/header'
import { Nav } from './components/nav'
import { Form } from './components/form'

import { INavLinks } from './interfaces'
import { InputText } from './components/inputText'
import { Button } from './components/button'
import { Picture } from './components/picture'

const navList: INavLinks[] = [
  {
    id: '1',
    name: 'products',
    value: 'products',
  },
  {
    id: '2',
    name: 'store',
    value: 'store',
  },
  {
    id: '3',
    name: 'contact',
    value: 'contact',
  },
]

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
    </div>
  )
}

export default App
