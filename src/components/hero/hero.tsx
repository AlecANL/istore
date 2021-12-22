import styles from './hero.module.css'
import classnames from 'classnames'
import { Wrapper } from '../wrapper'

interface IHeroProps {
  children: JSX.Element | JSX.Element[] | string
}

export function Hero(props: IHeroProps) {
  const { children } = props

  return (
    <section className={classnames(styles['hero'])}>
      <Wrapper>
        <div className={classnames(styles['hero-content'])}>{children}</div>
      </Wrapper>
    </section>
  )
}
