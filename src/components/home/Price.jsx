import React from "react"
import Heading from "../common/Heading"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='Tailor your experience by selecting from a range of feature-packed packages, each designed to enhance and optimize your unique requirements. Elevate your choices today!' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price;