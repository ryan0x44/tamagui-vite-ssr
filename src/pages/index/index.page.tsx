import { useState } from 'react'
import { Counter } from './Counter'
import Tamagui from '@tamagui/web'
const { YStack, H1, Button } = Tamagui
export { Page }

function Page() {
  const [count, setCount] = useState(0)

  return (
    <>
      <YStack>
          <H1 color={'black'}>Vite + Tamagui</H1>
          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
      </YStack>
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
