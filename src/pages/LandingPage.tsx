import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <section className="landing">
      <div className="panel">
        <h1>Paradise Nursery</h1>
        <p>
          We curate resilient, air‑purifying and aromatic house plants to brighten your
          spaces. Sustainably grown, locally delivered.
        </p>
        <Link to="/plants"><button className="btn">Get Started</button></Link>
      </div>
    </section>
  )
}