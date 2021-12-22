import React from 'react'
import classnames from 'classnames'

import styles from './button.module.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit'
  color: 'primary' | 'secondary'
  children: JSX.Element | JSX.Element[] | string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: React.CSSProperties
}

const defaultProps = {
  color: 'primary',
  type: 'button',
}

export function Button(props: IButtonProps & typeof defaultProps) {
  const { color, type, children, ...otherProps } = props
  return (
    // {`${styles.btn} ${styles[`color-${color}`]}`}
    <button
      className={classnames(styles.btn, {
        [`${styles[`color-${color}`]}`]: color,
      })}
      {...otherProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = defaultProps
