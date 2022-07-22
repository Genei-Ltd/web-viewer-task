export type ChildParent = {
  tag?: string | null
}

export type ChildNode = {
  type: 'child'
  /**
   * A unique key for each node
   */
  key: number
  /**
   * The string contents of this child node
   */
  val: string
  /**
   * No important for this task
   */
  parent: ChildParent
}

export type ParentNode = {
  type: 'parent'
  /**
   * A unique key for each node
   */
  key: number
  /**
   * The html tag to render for this parent node, e.g. a, div, span, img
   */
  tag: string
  /**
   * The node attrs, e.g. style, class, src & alt for <img> tags, href for <a> tags
   */
  attrs?: Record<string, unknown> | null
  /**
   * The children of this parent node
   */
  children: (ParentNode | ChildNode)[]
}

export type DocumentNode = ParentNode | ChildNode

export type WebDocument = ParentNode

export type WebDocumentPoint = {
  /**
   * References the child node key
   */
  key: number
  /**
   * Reference the offset into the child node
   */
  offset: number
}

export type WebDocumentRange = {
  /**
   * The start point of the range (in document order)
   */
  start: WebDocumentPoint
  /**
   * The end point of the range (in document order)
   */
  end: WebDocumentPoint
}

export type WebDocumentSelection = {
  /**
   * The anchor point of the document selection
   */
  anchor: WebDocumentPoint
  /**
   * The focus point of the document selection
   */
  focus: WebDocumentPoint
}

export type WebDocumentHighlight = {
  /**
   * A unique id for the highlight
   */
  id: string
  /**
   * The color of the highlight
   */
  color: 'yellow' | 'green'
  /**
   * The range over which to render the highlight
   */
  range: WebDocumentRange
}
