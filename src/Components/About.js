import React from 'react'
import web from "../images/about.svg"

export default function About() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2 className='brand-name'>Who am I ___</h2>
                  <p className="my-3 about_me">
                  Hey there everyone, I am Mayank Manik. Currently I am a sophomore at National Institute of Technology, Kurukshetra pursuing B.Tech in Computert Engineering.I am from Katihar, Bihar. I am a hands on person. I have a steady source of motivation that drives me to upgrade myself to better version. In my life, this attitude led me to challenge myself daily and learn new skills that helped me to do better work.
                  </p>
                  <div className="mb-5 mb-lg-0 mt-3">
                    <a href="/contact" className="btn-get-started">
                      Download CV
                    </a>
                  </div>
                </div>
                <div className="mt-5 mt-lg-0 col-lg-6 order-1 order-lg-2 header-img">
                  <img src={web} className="img-fluid left-right" alt="homepage" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
