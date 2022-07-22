import { webDocument } from './document'

function App() {
  return (
    <code>
      <pre>
        {JSON.stringify(webDocument, null, 2)}
      </pre>
    </code>
  )
}

export default App
