import { Link } from "react-router-dom"
import './Home.css'

export default function Home() {
  return (
    <>
        <div className="Hero-Container">
            <div className="HeroGrid-Container">
                <div className="HeroItems-Container">
                <h1 className="Tagline">Bring Nature Home!</h1>
                <p className="Description">
                    Discover the joy of nature in your home with our carefully curated collection of houseplants. 
                    At Green Haven, we believe that every home deserves a touch of green. 
                    Whether you’re looking for air-purifying plants, pet-friendly greenery, or aromatic herbs, 
                    we have something for everyone. 
                    Let us help you bring life, beauty, and tranquility into your space.
                </p>
                <Link to="Shop">
                    <button className="CTA">Get Started</button>
                </Link>
                </div>
            </div>
        </div>
    </>
  )
}