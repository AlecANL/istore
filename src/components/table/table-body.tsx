import styles from './table.module.css'

interface ITableBodyProps {
  children: JSX.Element | JSX.Element[]
}

export function TableBody(props: ITableBodyProps) {
  const { children } = props

  return <div className={styles['table-body']}>{children}</div>
}
