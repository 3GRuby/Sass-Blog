import React from 'react'

export default function Article({ title, body }) {
  return (
    <article>
      <div className="art-container">
        <div className="art-container__item-1">
          <div className="art-container__item-1__text">
            <h2 className="art-container__item-1__text__h">{title}</h2>
            <p className="art-container__item-1__text__p">{body}</p>
          </div>
        </div>
      </div>
    </article>
  )
}
