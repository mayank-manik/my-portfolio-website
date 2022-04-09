import React from 'react'
import web from "../images/home.svg"

export default function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>Hey there everyone ! <br/>I'm <strong className='brand-name'>Mayank Manik</strong></h1>
                  <h3 className="my-3">
                    Turning my dreams into reality through coding.
                  </h3>
                  <div className="mb-5 mb-lg-0 mt-3">
                    <a href="/project" className="btn-get-started">
                      Get Started
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img mt-5 mt-lg-0">
                  <img src={web} className="img-fluid up-down" alt="homepage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
