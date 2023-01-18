import logo from './logo.jpg'
import './App.css'
import { Layout } from './components'

function App() {
  return (
    <Layout>
      <div className="App">
        <header className="App-header">
          <a href="https://linktr.ee/sondelsur">
            <img src={logo} alt="logo" className="App-logo" />
          </a>
        </header>
      </div>
    </Layout>
  )
}

export default App
