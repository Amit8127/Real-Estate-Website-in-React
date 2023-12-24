import React from "react"
import Back from "./common/Back"
import Heading from "./common/Heading"
import img from "./Images/about.jpg"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />
          <p>In the realm of rental properties, our agency's narrative is a tale of dedication, innovation, and a relentless pursuit of redefining the tenant and landlord relationship. Founded in 2009, our agency emerged from a passion for creating not just living spaces but vibrant communities where individuals can thrive.</p>
          <p>From the outset, we recognized the distinctive nature of the rental market – a dynamic landscape that demands flexibility, adaptability, and a nuanced understanding of the diverse needs of tenants and property owners alike. Our journey began with a commitment to bridge the gap between these two vital stakeholders, forging connections that extend beyond lease agreements.</p>
           <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='banner' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About;