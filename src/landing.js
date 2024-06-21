import React from 'react'
import './landing.css';
function landing() {
  return (
    <div>
      <header id="showcase">
      <section id="section-z">
        <h1>Welcome To The New York City Transit Hub</h1>
          <p>A New York University LeetCode Bootcamp Project</p>
          <p><a href="https://api.mta.info">https://api.mta.info</a></p>
        </section>
      </header>
      <section id="section-a">
        <p>The NYU LeetCode Bootcamp's project, NYCTransitHub, is a comprehensive web application designed to streamline access to vital transit information for New York City's extensive public transportation network. With a primary objective of providing real-time updates, schedules, and transit data, NYCTransitHub harnesses the power of the MTA API to deliver accurate and up-to-the-minute information to its users. Through a clean and intuitive interface, users can easily access live updates on subway, bus, and rail services, ensuring they stay informed about any changes or disruptions to their routes.</p>
      </section>
      <section id="section-b">
        <p>Beyond simply displaying real-time transit updates, NYCTransitHub boasts an array of key features aimed at enhancing the user experience. From a route planner that empowers users to plan their journeys efficiently to service alerts that promptly notify users of any interruptions or delays, the platform is designed to cater to the diverse needs of NYC commuters. Additionally, the inclusion of user accounts ensures a personalized experience, allowing users to save preferences and access additional functionalities. Moreover, with multilingual support, NYCTransitHub aims to cater to the city's diverse population, ensuring accessibility for all residents and visitors alike.</p>
      </section>
      <section id="section-c">
        <div class="box-1">
        </div>
        <div class="box-2">
          <h2>David Ren</h2>
          <h3>Full-Stack Developer</h3>
          dr3587@nyu.edu
        </div>
        <div class="box-3">
        </div>
      </section>
      <iframe id='gmap_canvas'width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6%20Metrotech+(NYC%20Transit%20Hub)&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps devices</a></iframe>
      
    </div>
    
  );
}

export default landing;
