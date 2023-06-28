import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@tamagui/core/reset.css'
import { Suspense, useState } from 'react'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Suspense>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </Suspense>
    </TamaguiProvider>
  )
}

export default App
