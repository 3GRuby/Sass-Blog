import React from 'react'

export default function Form() {
  return (
    <div className="main-container">
      <div className="main-container__header">
        <h1>CONTACT US</h1>
      </div>

      <div className="main-container__form">
        <form action="#">
          <input
            type="text"
            className="main-container__form__text-1"
            name="fname"
          />
          <br />
          <br />
          <input
            type="text"
            className="main-container__form__text-2"
            name="lname"
          />
          <br />
          <br />
          <textarea
            type="text"
            className="main-container__form__text-3"
          ></textarea>
          <br />
          <br />
          <input
            type="submit"
            className="main-container__form__btn"
            value="Submit"
          />
        </form>
      </div>
    </div>
  )
}
