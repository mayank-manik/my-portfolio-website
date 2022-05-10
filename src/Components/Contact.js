import React from "react"
import "../App.css";

export default function Contact() {
  document.title="Mayank Manik | Contact";
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 contact-text">
                  <h1 className="brand-name">CONTACT</h1>
                  <h3 className="my-3">
                    You got a problem to solve ?
                  </h3>
                  <p>Get your space suit ready and tell me your ideas to develop your dream application.</p>
                  <div className="mt-3 contact">
                    <a href="https://github.com/mayank-manik" rel="noreferrer" target="_blank"><i className="fa-brands fa-github fa-2x fa-fw"></i></a>
                    <a href="https://www.linkedin.com/in/mayank-manik-a55292227/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin fa-2x fa-fw"></i></a>
                    <a href="https://www.instagram.com/mayank._.manik/" rel="noreferrer" target="_blank"><i className="fa-brands fa-instagram fa-2x fa-fw"></i></a>
                  </div>
                </div>
                <div className="col-lg-6 order-2 order-lg-2 header-img">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="exampleInputName1" className="form-label" style={{float: "left"}}>NAME</label>
                      <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label" style={{float: "left"}}>EMAIL</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{float: "left"}}>MESSAGE</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="mb-5 mb-lg-0 btn-get-started" style={{float: "left"}}>HIT ME UP <i className="fa-solid fa-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
