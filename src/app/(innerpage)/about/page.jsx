import About from '@/app/Components/About';
import CtaSection1 from '@/app/Components/CtaSection/CtaSection1';
import CounterSection2 from '@/app/Components/FunSection/CounterSection2';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import TeamSection from '@/app/Components/TeamSection';
import React from 'react';

const headingData = {
    title: 'About Page',
  };
  
  const aboutData = {
    sectionSubtitle: 'ABOUT US',
    sectionTitle: 'More Than 9+ Years About Provide Medical.',
    aboutText:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
    service:
      "There are many variations of pass available this medical service the team <a href='#''>READ MORE +</a>",
    experienceYears: '9+',
    experienceTitle: 'Experience',
    videoUrl: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoText: 'How We Work',
    iconboxes: [
      {
        imgUrl: '/assets/img/icons/about_icon_1.png',
        title: 'Member Support',
        subtitle: 'But must explain to you medical of and pain was.',
      },
      {
        imgUrl: '/assets/img/icons/about_icon_2.png',
        title: 'Professional Outreach',
        subtitle: 'But must explain to you medical of and pain was.',
      },
    ],
  
    btnUrl: '/about',
    btnText: 'More about Us ...',
    sectionImgUrl: '/assets/img/about_section_img_1.png',
    headImgUrl: '/assets/img/about_img_7.jpeg',
  };
  
  const counterData = [
    {
      iconSrc: '/assets/img/icons/counter_icon_1.png',
      countTo: 11,
      suffix: '+',
      title: 'Active Members',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_2.png',
      countTo: 23,
      suffix: 'K+',
      title: 'Contributions',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_3.png',
      countTo: 5,
      suffix: '+',
      title: 'Investment Portfolios',
    },
    {
      iconSrc: '/assets/img/icons/counter_icon_4.png',
      countTo: 4,
      suffix: '+',
      title: 'Get Togethers',
    },
  ];
  
  const teamData = {
    subtitle: 'OUR MEMBERS',
    title: ' Meet The Decagon Pride Group <br />Team Members',
    sliderData: [
      {
        name: 'Dr. Norma Pedric',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_1.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. James Lewis',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_3.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Sophia Anderson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_4.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. Michael Thompson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_5.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
      {
        name: 'Dr. David Wilson',
        profession: 'Neurologist',
        imageUrl: '/assets/img/team_6.jpg',
        link: '/doctors/doctor-details',
        facebook: '/',
        pinterest: '/',
        twitter: '/',
        instagram: '/',
      },
    ],
  };
  
  const ctaData = {
    videoLink: 'https://www.youtube.com/embed/rRid6GCJtgc',
    videoButtonText: 'WATCH VIDEO',
    subtitle: 'OUR HIGHLIGHT VIDEO',
    title: 'A word from the DPG chairperson',
    description:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
    buttonLink: '/contact',
    buttonText: 'More Videos',
    brandImage: '/assets/img/medical_brand.png',
  };

const page = () => {
    return (
        <div className='about-page-area'>
        <Section
        className={'cs_page_heading cs_bg_filed cs_center'}
        backgroundImage="/assets/img/page_heading_bg.jpg"
      >
        <PageHeading data={headingData} />
      </Section>
      {/* Start About Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_about cs_style_1 position-relative'}
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter Section */}

      <Section
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_counter_area_2"
      >
        <CounterSection2 data={counterData} />
      </Section>
      {/* End Counter Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center'}
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData} />
      </Section>
      {/* End CTA Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="0"
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}


        </div>
    );
};

export default page;