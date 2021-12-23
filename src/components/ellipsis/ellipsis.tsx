import styles from './ellipsis.module.css'
import classnames from 'classnames'

interface IEllipsisProps {
  children: JSX.Element | JSX.Element[] | string
  line: 'default' | '2' | '3'
}

const defaultProps = {
  line: 'default',
}

export function Ellipsis(props: IEllipsisProps & typeof defaultProps) {
  const { children, line } = props

  return (
    <span
      className={classnames(styles['ellipsis'], {
        [styles[`line-clamp-${line}`]]: line,
      })}
    >
      {children}
    </span>
  )
}

Ellipsis.defaultProps = defaultProps
