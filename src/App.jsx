import { useState } from 'react'
import logo from './logo.svg'
import favicon from './favicon.svg'
import './App.css'
import MyComponent from './components/learn/MyComponents'
import {SecondComponent} from './components/learn/SecondComponent'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
      <div><img src={logo} className="App-logo" alt="logo" /></div> 
       <div><img src={favicon} className="App-logo" alt="favicon" /></div>
        <p>Hello Vite + React!</p>
        <MyComponent></MyComponent>
        <SecondComponent></SecondComponent>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
