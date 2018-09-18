import React, { Component } from 'react'

import textOptions from './textOptions'

class shrinkText extends Component {
  constructor (props) {
    super()
    this.state = {
      text: ''}
    if (!text) {
      return ''
    }
    this.updateText = this.updateText.bind(this)
  }

  render () {
    return (
      <div>
        <textarea
          className='TextEntry-textbox'
          placeholder='What do you want to shrink?'
          onChange={this.updateText}
          value={text} />
      </div>
    )
  }
}

export default shrinkText
