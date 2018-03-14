import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './sim.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Simeon Vincent`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(1),
          }}
        />
        <p>
          Written by <strong>Simeon Vincent</strong> who lives and works in
          Irvine, CA building … things.{' '}
          <a href="https://twitter.com/dotproto">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
