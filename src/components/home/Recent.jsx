import React from "react"
import Heading from "../common/Heading"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Discover diverse real estate options, from modern homes to prime commercial spaces, all showcased for your convenience and selection.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent;