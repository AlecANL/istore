import { Wrapper } from '../wrapper'

import styles from './header.module.css'
import classnames from 'classnames'

interface IHeaderProps {
  children: JSX.Element | JSX.Element[] | string
}

export function Header(props: IHeaderProps) {
  const { children } = props

  return (
    <header className={classnames(styles.header)}>
      <Wrapper>
        <div className={classnames(styles['header-content'])}>{children}</div>
      </Wrapper>
    </header>
  )
}
