import React from 'react'
import Header from '../components/Header'
import { initStore, inputChange } from '../store'
import withRedux from 'next-redux-wrapper'

class Index extends React.Component { 
  static getInitProps ({ store }) {
    store.dispatch(inputChange())
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default withRedux(initStore, null)(Index);