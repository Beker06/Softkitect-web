import Image from 'next/image'
import React from 'react'
import DevGirl from '../../public/img/shutterstock8.jpg'

const Nearshore = () => {
  return (
    <>
      <div className="nearshore-container">
        <div className='nearshore-row disappear'>
          <label>
            NEARSHORE
          </label>
        </div>
        <div className='nearshore-row'>
          <div className="nearshore-col right">
            Amazing ideas have no boundaries. Neither 
            technology. Nearshore Software Development 
            offers you the best offshoring at the nearest 
            location. Start nearshoring and start transform 
            your amazing ideas together. 
            <br/><br/>
            We offer nearshore software development services 
            outside of the US but close enough to visit every 
            day. We are conveniently located only five minutes 
            away from the San Diego CA border, in Tijuana, 
            Mexico.
            <br/><br/>
            <label>Some of the benefits of Nearshore Software 
              Development are: 
              <br/><br/>
              Shared time zones.
            </label>
            <br/>
            Our clients love real-time interaction. Who doesn’t? 
            Everybody knows that collaboration produces the best 
            results. 
            <br/><br/>
            <label>Short flight times.</label>
            <br/>
            If you live in California, you can drive to visit. If 
            you are taking a plane, we are only a 2 to 3 hours flight 
            away.
          </div>
          <div className="nearshore-col left">
            <label>Bilingual/Bicultural (cultural affinity)</label> 
            <br/>
            The proximity with San Diego and the state of California 
            makes us a bilingual region. But we have been doing business 
            with companies from the US for many years and we have developed 
            a cultural and work ethic affinity.
            <br/><br/>
            <label>Scalability (pool of talent) </label>
            <br/>
            Tijuana is a city with a big pool of talent. Every year 
            thousands of young and brilliant software developers graduate 
            from school. Your project can grow from 5 to 500 developers 
            and benefit from the local economic programs focused on IT and 
            innovation. 
            <br/><br/>
            <label>Lower operational cost</label>
            <br/>
            Our nearshoring approach allows you to establish your 
            operation in Baja at “low cost” cost-efective. 
            <br/><br/>
            <label>Staff flexibility</label>
            <br/>
            We become an extension of your existing operations. 
            Your team of developers can grow when your company needs 
            it or shrink when needed. 
            <br/><br/>
            If you want to learn more about Nearshore Software 
            Development, take a moment to read our blog article.
          </div>
        </div>
      </div>
      <div className='some-benefits'>
        <div className='some-benefits-text disappear'>
          Some Benefits of Hiring Remote Software
          Developers in Baja
        </div>
      </div>
      <Image className="devgirl-photo disappear" src={DevGirl} alt="dev-girl" />
      <div className='bilingual-container'>
        <div className='bilingual-title right'>
          <label>BILINGUAL</label> TEAM
        </div>
        <div className='bilingual-text left'>
          Set your own team of professional and Agile remote
          developers that speak your language and embrace
          your business culture.
          <br /><br />
          Shared Time Zone<br /> Close enough to visit, close
          enough to share the same office hours.
          <br /><br />
          Scalable Teams<br /> Start with a small team of
          highly skilled engineers and add more members as
          your projects grow.
          <br /><br /><br />
        </div>
      </div>
    </>
  )
}

export default Nearshore