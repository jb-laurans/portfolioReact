import LogoTitle from '../../assets/images/jb.png'
//import LogotTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developper" />
          Jean-Baptiste
          <br />
          Web Developer
        </h1>
        <h2>Front & Backend Developer / Full Stack / Pentester</h2>
        <Link to="/contact" className="flat-button">
          CONTACTEZ MOI
        </Link>
      </div>
    </div>
  )
}

export default Home
