import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import Service from '@/app/Components/Service';
import React from 'react';

const headingData = {
    title: 'Service',
  };
  
  const serviceData = {
    subtitle: 'OUR CSR ACTIVITIES',
    title: 'Community Social Responsibility Services',
    description:
      'At The Decagon Pride, we believe in giving back to the community and promoting sustainability. Our CSR initiatives focus on the following key areas:',
    services: [
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: 'Educational Support',
        subtitle: 'Empowering the next generation through technology.',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_2.png',
        index: '02',
        title: 'Environment',
        subtitle: 'Protecting our planet for a brighter future.',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_3.png',
        index: '03',
        title: 'CSR 3',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_4.png',
        index: '04',
        title: 'CSR 4',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_5.png',
        index: '05',
        title: 'CSR 5',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_6.png',
        index: '06',
        title: 'CSR 6',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_7.png',
        index: '07',
        title: 'CSR 7',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_8.png',
        index: '08',
        title: 'CSR 8',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
    ],
    footerIcon: '/assets/img/icons/service_footer_icon_1.png',
    footerText:
      'Partnering with communities to better life',
    footerLink: '/',
    footerLinkText: 'SEE MORE',
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
          topSpaceLg="80"
          topSpaceMd="120"
          bottomSpaceLg="80"
          bottomSpaceMd="120"
        >
          <Service data={serviceData} />
        </Section>

        </div>
    );
};

export default page;