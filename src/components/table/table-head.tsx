import styles from './table.module.css'

interface ITableHeadProps {
  children: JSX.Element[] | JSX.Element
}

export function TableHead(props: ITableHeadProps) {
  const { children } = props

  return <div className={styles['table-head']}>{children}</div>
}
