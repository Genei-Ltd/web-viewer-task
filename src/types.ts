export type ChildParent = {
  tag?: string | null
}

export type ChildNode = {
  type: 'child'
  key: number
  val: string
  parent: ChildParent
}

export type ParentNode = {
  type: 'parent'
  key: number
  tag: string
  attrs?: Record<string, unknown> | null
  children: (ParentNode | ChildNode)[]
}

export type DocumentNode = ParentNode | ChildNode

export type WebDocument = ParentNode

export type WebDocumentPoint = {
  key: number
  offset: number
}

export type WebDocumentRange = {
  start: WebDocumentPoint
  end: WebDocumentPoint
}

export type WebDocumentSelection = {
  anchor: WebDocumentPoint
  focus: WebDocumentPoint
}

export type WebDocumentHighlight = {
  id: string
  color: 'yellow' | 'green'
  range: WebDocumentRange
}
