/* import logo from './logo.svg'; */
import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herocontent from './components/Herocontent'
import Heroanimation from './components/Heroanimation'
import Services from './components/Services'
import Article from './components/Article'
import Form from './components/Form'
import Footer from './components/Footer'
import Serviceheader from './components/Serviceheader'
import Articleheader from './components/Articleheader'

function App() {
  const [userData, setUserData] = useState([])
  const [articleData, setArticleData] = useState([])

  /* get user data */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((user) => setUserData(user.slice(0, 3)))
  }, [])

  /* get posts */
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((article) => setArticleData(article.slice(0, 4)))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="Hero">
        <Herocontent />
        <Heroanimation />
      </div>

      <Serviceheader />

      <div className="body-cont__box-2">
        {userData.map((data) => (
          <Services
            key={data.id}
            Name={data.name}
            website={data.website}
            email={data.email}
            phone={data.phone}
            company={data.company.name}
          />
        ))}
      </div>

      <div className="art-container">
        <Articleheader />
        <div className="art-container__item-1">
          {articleData.map((art) => (
            <Article key={art.id} title={art.title} body={art.body} />
          ))}
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default App
