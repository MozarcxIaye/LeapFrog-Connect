import React from 'react'
import "./PageNotFound.css"

const PageNotFound = () => {
  return (
    <div className='main'>
        <section>
            <div className="error-404">
                <h1>404</h1>
            </div>
            <div className="error-description">
                <h3>Oops... Page Not Found</h3>
                <p>We are sorry, But the page you requested was not found.</p>
            </div>
        </section>
    </div>
  )
}

export default PageNotFound