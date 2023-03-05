import React from 'react'
import theme from './assets/images/hero.svg'
import phone from './assets/images/phone.svg'
import { useGlobalContext } from './Context'
const Home = () => {
    const {closeSubmenu} = useGlobalContext()
    
  return (
    <main onMouseOver={() => closeSubmenu()}>
        <section>
            <article className="content">
                <h1>Payments infrastructure for the internet</h1>
                <p>Millions of companies of all sizes—from startups to 
                    Fortune 500s—use Stripe’s software and APIs to accept 
                    payments, send payouts, and manage their businesses 
                    online.
                </p>
                <button className="btn">Start now</button>
            </article>

            <article className="content-image">
                <img src={phone} alt="illustration of a payment app" />
            </article>

        </section>
        
    </main>
  )
}

export default Home