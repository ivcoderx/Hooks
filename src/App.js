import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar, Alert } from './components'
import { Home, About, Profile } from './pages'
import { AlertState } from './context/alert'
import { GithubState } from './context/github'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={ { text: 'Text alert' } }/>
            <Switch>
              <Route path="/about" component={ About } />
              <Route path="/profile/:name" component={ Profile } />
              <Route path="/" exact component={ Home } />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
