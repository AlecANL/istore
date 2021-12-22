import React from 'react'

import styles from './wrapper.module.css'

interface IWrapperProps {
  children: JSX.Element | JSX.Element[] | string
  style?: React.CSSProperties
  className?: string
}

export function Wrapper(props: IWrapperProps) {
  const { children, style } = props
  return (
    <div className={styles.wrapper} style={style}>
      {children}
    </div>
  )
}
