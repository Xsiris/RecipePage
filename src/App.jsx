import { useState } from 'react'
import RecipePage from './pages/RecipePage'
import Favicon from 'react-favicon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Favicon url="./img/favicon-32x32.png"/>
      <title>Recipe Challenge</title>
      <div className="flex flex-col justify-center items-center w-full bg-lightBrown">
        <RecipePage />
      </div>
    </>
  )
}

export default App
