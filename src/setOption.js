import React, { Component } from 'react'

import textOptions from './textOptions'

class setOption extends Component {
  constructor (props) {
    super(props)
    this.state = {
      options: ''
    }
  }

  render () {
    options.forEach(option => {
      opObj = textOptions.find(o => o.id === option)
      return (
      if (opObj) {
        text = opObj.fn(text)
      }
    }))
    textOptions.map((option, idx) =>
      <div key={idx} className='col-6'>
        <label htmlFor={option.id}>
          <input type='checkbox' id={option.id} onChange={this.setOption(option.id)} /> {' ' + option.label}
        </label>
      </div>
    )
  }
}

export default setOption
