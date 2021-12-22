import React from 'react'

import styles from './custom-link.module.css'

interface ILink extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: JSX.Element | JSX.Element[] | string
}

export function CustomLink(props: ILink) {
  const { children, ...otherProps } = props

  return (
    // eslint-disable-next-line
    <a className={styles.link} aria-current='page' href='#' {...otherProps}>
      {children}
    </a>
  )
}
