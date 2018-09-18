import React, { Component } from 'react'

import textOptions from './textOptions'
import shrinkText from './shrinkText'
import setOption from './setOption'

class App extends Component {
  render () {
    return (
      <div className='App container'>
        <h1>TweetShrink</h1>
        <div className='row'>
          <div className='col'>
            {/* TextEntry */}
            const shrunkText = this.shrinkText()



            {/* end TextEntry */}
          </div>
          <div className='col'>
            {shrinkText}
          </div>
        </div>
        <div className='row options'>
          <div className='col-12'>
            <h4>Options</h4>
          </div>
          {textOptions}
        </div>
      </div>
    )
  }
}

export default App
