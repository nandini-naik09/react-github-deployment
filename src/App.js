import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

export default function App() {
  return (
    <div>
      <Header/>
      <h1>App</h1>
      <Component1/>
      <Component2/>
      <Component3/>
      <Footer/>
    </div>
  )
}