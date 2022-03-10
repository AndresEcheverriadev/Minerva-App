import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

function Itemcount() {
  return (
    <div><ButtonGroup aria-label="Basic example">
    <Button variant="secondary">-1</Button>
    <Button variant="secondary" disabled>0</Button>
    <Button variant="secondary">+1</Button>
  </ButtonGroup></div>
    

  )
}

export default Itemcount