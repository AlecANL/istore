import React from 'react'

import styles from './input-text.module.css'
import classnames from 'classnames'

interface IHeaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: JSX.Element | JSX.Element[] | string
  className?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: 'text' | 'number' | 'email' | 'search'
}

export function InputText(props: IHeaderProps) {
  const { type, className, children, ...otherProps } = props

  return (
    <div
      style={{
        flex: '1',
      }}
    >
      <input
        type={type}
        className={classnames(styles.input, {
          [`${className}`]: className,
        })}
        {...otherProps}
      />
      {children && children}
    </div>
  )
}
