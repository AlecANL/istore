import React from 'react'

import styles from './nav.module.css'
import { INavLinks } from '../../interfaces'
import { CustomLink } from '../custom-link'
import classnames from 'classnames'

interface INavProps extends React.HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties
  className?: string
  links: INavLinks[]
}

export function Nav(props: INavProps) {
  const { links, className, style, ...otherProps } = props

  return (
    <nav
      style={style}
      className={classnames(styles.nav, {
        [`${className}`]: className,
      })}
      {...otherProps}
    >
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <CustomLink>{link.value}</CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
