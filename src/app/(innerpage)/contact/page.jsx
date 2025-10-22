import ContactSection from '@/app/Components/ContactSection';
import LocationMap from '@/app/Components/LocationMap/Index';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import React from 'react';


const headingData = {
    backgroundImage: '/assets/img/page_heading_bg.jpg',
    title: 'Contact Us',
  };
  
  const contactData = {
    sectionSubtitle: 'CONTACT US',
    SectionTitle: 'Meet Our Specialist This ppp <br />Doctor Meet',
    teethShapeImg: '/assets/img/icons/hero_shape_3.png',
    contactImg: '/assets/img/contact_2.png',
    iconBox: {
      style: 'cs_style_4',
      icon: '/assets/img/icons/call_icon_1.png',
      title: 'Emergency Call',
      subtitle: '24/7 – Support and easy',
    },
  };
  
  const mapData = {
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8017996448897!2d36.68432637499614!3d-1.3238889358756046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b7b7b7b7b7b%3A0x8888888888888888!2sKaren%20Village%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1729582900000!5m2!1sen!2ske',
  };

const page = () => {
    return (
        <div>
      <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>


        </div>
    );
};

export default page;