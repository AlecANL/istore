import React from 'react'

import styles from './picture.module.css'
import classnames from 'classnames'

interface IPictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
}

export function Picture(props: IPictureProps) {
  const { src, alt, ...otherProps } = props

  return (
    <picture className={classnames(styles.picture)}>
      <img src={src} alt={alt} {...otherProps} />
    </picture>
  )
}
