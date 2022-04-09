import React from 'react'
import Card from './Card'
import ProjectData from './ProjectData'

export default function Project() {
  return (
    <>
      <div className="my-5 d-block d-md-none"><h1 className="text-center">Projects</h1></div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row mt-md-5 gy-5">
              {
                ProjectData.map((val, ind) => {
                  return <Card
                    key={ind}
                    imagesrc={val.imagesrc}
                    title={val.title}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
