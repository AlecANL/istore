interface IParagraphProps {
  children: JSX.Element | JSX.Element[] | string | string[] | number
}

export function Paragraph(props: IParagraphProps) {
  const { children } = props
  return <p>{children}</p>
}
