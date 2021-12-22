import React from 'react'

import styles from './form.module.css'
import classnames from 'classnames'

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: JSX.Element | JSX.Element[] | string
  onSubmit?: (event: React.ChangeEvent<HTMLFormElement>) => void
  style?: React.CSSProperties
  className?: string
}

export function Form(props: IFormProps) {
  const { className, children, ...otherProps } = props

  return (
    <form
      className={classnames(styles.form, {
        [`${styles[`${className}`]}`]: className,
      })}
      {...otherProps}
    >
      {children}
    </form>
  )
}
