import React from 'react'
import classnames from 'classnames'

import styles from './headline.module.css'

interface IHeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: JSX.Element | JSX.Element | string | string[]
}

export function Headline(props: IHeadlineProps) {
  const { type, children, ...otherProps } = props
  const Heading = type
  return (
    <Heading
      className={classnames('heading', {
        [styles[`heading-${type}`]]: type,
      })}
      {...otherProps}
    >
      {children}
    </Heading>
  )
}
