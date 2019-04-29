import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'

class IndexPage extends Component {
  static async getInitialProps(context) {
    /* It executes either on the server or the client and you can use it to initialize your app before it loads,
so on the server for example in getInitialProps, you could fetch data from a database and then pre-
populate the props this page component will receive with props of your choice.*/
    return {appName: 'Learning Next.js'}
  }
  render() {
    return (
      <div>
        <h1>MAIN PAGE of {this.props.appName}</h1>
        <p>
          Go to{' '}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push('/auth')}>Go to Auth</button>
      </div>
    )
  }
}

export default IndexPage
