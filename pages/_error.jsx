import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

const errorPage = () => (
  <div>
    <h1>Oopsies, something looks wrong, here...</h1>
    <p>
      Try going back to
      <Link href="/">
        <a>Home</a>
      </Link>
    </p>
  </div>
)

export default errorPage
