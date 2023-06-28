import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '@tamagui/core/reset.css'
import { Suspense, useState } from 'react'
import { TamaguiProvider, YStack, H1, Button } from 'tamagui'
import tamaguiConfig from '../tamagui.config'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Suspense>
        <YStack>
          <H1 color={'black'}>Vite + Tamagui</H1>
          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        </YStack>
      </Suspense>
    </TamaguiProvider>
  )
}

export default App
