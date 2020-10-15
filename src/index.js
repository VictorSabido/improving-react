import React from 'react'
import ReacDom from 'react-dom'
// import PrimeraApp from './PrimeraApp'
import CounterApp from './CounterApp'
import './css/app.css'

const divRoot = document.querySelector('#root')

ReacDom.render(<CounterApp value={17} />, divRoot)
