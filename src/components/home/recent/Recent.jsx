import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Grt to know recenly booked property from the list below' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
