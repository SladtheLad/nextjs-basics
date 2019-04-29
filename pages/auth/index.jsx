import React from 'react'
import Router from 'next/router'
import User from '../../components/User'

const authIndexPage = props => (
  <div>
    <h1>AUTH  of {props.appName}</h1>
    <User name="SladtheLad" age={32} />
    <button onClick={() => Router.push('/')}>GO HOME</button>
  </div>
)
// Another way to get Initial Props in stateless components
authIndexPage.getInitialProps = async context => {
  return {
    appName: 'Super Next.js App'
  }
}

export default authIndexPage
