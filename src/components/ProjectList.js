import React from 'react';

const projects = [
  {
    title: 'ShopNest (Online Shopping)',
    description: 'The Online Shopping is a web-based application intended for online retailers. The main objective of this application is to make it interactive and its ease of use. The online shopping process involves consumers browsing products, adding items to a shopping cart, paying typically with a credit card, and having purchases delivered to their home. Popular online shopping websites attract customers with broad selections, competitive pricing, and convenient delivery options.',
    technologies: 'JSP, JDBC, Hibernate, Servlet API, MySQL, Workbench, Tomcat 9.0v'
  },
  {
    title: 'Online Bus Ticket Booking System',
    description: 'Online Bus Ticket Reservation System is a Web based application that works within a centralized network. This project presents a review on the software program "Online Bus Ticket Reservation System" as should be used in a bus transportation system. The main objectives of this project is to manage details of Bus Ticket availability , Ticket booking, Agent , Seats. It manages all the information and records about Bus and Customer Details..',
    technologies: 'JavaServer Pages (JSP) · HTML · Cascading Style Sheets (CSS) · Java Database Connectivity (JDBC) · Hibernate · Servlet API · Tomcat · Eclipse · Workbench · JavaScript.'
  },
  {
    title: 'TeleHealth Care',
    description: 'Tele-Health care is a Web based application that works through the internet connection and it innolves the provisions of health care and sharing of medical knowledge using telecommunication technologies. In general tele-health care can be defined as delivery of health care and sharing of medical knowledge over a distance us in telecommunication.The main objective of Tele-Health care is that with the online doctor , a patient can connect with qualified healthcare professional using Video Calls, Chat, Phone Consultation etc.',
    technologies: 'JavaServer Pages (JSP) · Java Database Connectivity (JDBC) · HTML · Cascading Style Sheets (CSS) · Servlet API · Workbench · MySQL · Tomcat'
  }
];

function ProjectList() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectList;
