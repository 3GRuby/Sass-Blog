import React from 'react'
import userimg from '../images/user.jpg'

function Services({ company, phone, Name, website, email }) {
  return (
    <section>
      <div className="body-cont__box-2__item">
        <h2 className="body-cont__box-2__head">{company}</h2>
        <p className="body-cont__box-2__item__parag">{Name} </p>
        <p className="body-cont__box-2__item__parag">{email} </p>
        <p className="body-cont__box-2__item__parag">{website} </p>
        <p className="body-cont__box-2__item__parag">{phone} </p>
      </div>
    </section>
  )
}

export default Services
