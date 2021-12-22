import { TableHead } from './table-head'
import { TableBody } from './table-body'

import styles from './table.module.css'

interface ITableProps {
  children: JSX.Element | JSX.Element[]
}

export function Table(props: ITableProps) {
  const { children } = props

  return <section className={styles['table']}>{children}</section>
}

Table.Head = TableHead
Table.Body = TableBody
