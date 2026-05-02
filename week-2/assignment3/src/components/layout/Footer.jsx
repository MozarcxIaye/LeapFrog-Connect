import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <div><img src="tmdblong.svg" alt="TMDB logo" /></div>
        <button>Join the community</button>
      </div>
      <div className="footer-blocks footer-the-basics">
        <h3>The Basics</h3>
        <ul>
          <li>About TMDB</li>
          <li>Contact Us</li>
          <li>API Documentation</li>
          <li>API for Business</li>
          <li>System Status</li>
        </ul>
      </div>
        <div className="footer-blocks footer-get-involved">
        <h3>Get Involved</h3>
        <ul>
          <li>Contribution Bible</li>
          <li>Add New Movie</li>
          <li>Add New TV Show</li>
        </ul>
      </div>
      <div className="footer-blocks footer-community">
        <h3>Community</h3>
        <ul>
          <li>Guidelines</li>
          <li>Discussions</li>
          <li>Leaderboard</li>
          <li>Support Forums</li>
        </ul>
      </div>

      <div className="footer-blocks footer-legal">
        <h3>Legal</h3>
        <ul>
          <li>Terms of Use</li>
          <li>API Terms of Use</li>
          <li>Privacy Policy</li>
          <li>DMCA Policy</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer