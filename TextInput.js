import React, { Component } from 'react'

class TextInput extends Component {
  constructor (props) {
    super()
  }
render () {
  const shrunkText = this.shrinkText()
  return (
    <React.Fragment>
    <div {text && `${text.length} characters`}/>
    <div className='TextEntry-shrunk-text' {shrunkText} />
    <div {shrunkText && `${shrunkText.length} characters`} />
    </React.Fragment>
  )
}