import React from 'react';
import HeroSection from '../Components/HeroSection';
import Section from '../Components/Section';
import CtaSection from '../Components/CtaSection';
import About from '../Components/About';
import CounterSection from '../Components/FunSection/CounterSection';
import Service from '../Components/Service';
import TeamSection from '../Components/TeamSection';
import BrandsSlider from '../Components/BrandsSection';
import ChooseUs from '../Components/ChooseUs';
import ProjectSection from '../Components/ProjectSection';
import CtaSection1 from '../Components/CtaSection/CtaSection1';
import MedicalTabSection from '../Components/MedicalTabSection';
import ContactSection2 from '../Components/ContactSection/ContactSection2';
import BlogSection from '../Components/BlogsSection';

const heroData = {
    primarySlider: [
      {
        bgImageUrl: '/assets/img/hero_slider_3.jpg',
        title: 'Decagon Pride Group <span>The Pride Counts!.</span>',
        contactSubtitle:
          'At Decagon Pride, we believe in the power of collective effort. Through regular savings, investments, and welfare programs, we provide a dependable support system that enables every member to thrive—financially, socially, and personally.',
        contactTitle: 'Reach Out To Us.',
        contact: 'Call Us at: (+254) 722 62 11 58',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_2.jpg',
        title: 'Financial <span>Empowerment.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Reach Out To Us.',
        contact: 'Call Us at: (+254) 722 62 11 58',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
      {
        bgImageUrl: '/assets/img/hero_slider_1.jpg',
        title: 'Welfare <br><span>Support.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Reach Out To Us.',
        contact: 'Call Us at: (+254) 722 62 11 58',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },      
      {
        bgImageUrl: '/assets/img/hero_slider_1.jpg',
        title: 'Community  <br><span>Engagement .</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Reach Out To Us.',
        contact: 'Call Us at: (+254) 722 62 11 58',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },      
      {
        bgImageUrl: '/assets/img/hero_slider_1.jpg',
        title: 'Sustainability  <br>and <span>Growth.</span>',
        contactSubtitle:
          'Medical ers piciatis unde omnis iste natus this the word medical this mountains, far from the countries Vokalia and, live the docor white teeth sitting on a dental for best medical.',
        contactTitle: 'Reach Out To Us.',
        contact: 'Call Us at: (+254) 722 62 11 58',
        btnText1: 'Contact Now',
        link: '/contact',
        btnText2: 'Discover More',
        link2: '/about',
        iconImgUrl: '/assets/img/icons/hero_icon.png',
      },
    ],
    secondarySlider: [
      '/assets/img/hero_slider_sm_1.png',
      '/assets/img/hero_slider_sm_2.png',
      '/assets/img/hero_slider_sm_3.png',
      '/assets/img/hero_slider_sm_3.png',
      '/assets/img/hero_slider_sm_3.png',
    ],
  };
  
  const ctaData = {
    imageUrl: '/assets/img/cta_img_1.jpg',
    title: 'Meet The DPG Team!',
    subtitle: 'Care to discuss your financial goals with us?',
    buttonUrl: '/appointments',
    buttonText: 'Booking Now',
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
    btnText: 'More About Us ...',
    sectionImgUrl: '/assets/img/about_section_img_1.png',
    headImgUrl: '/assets/img/about_img_1.jpg',
  };
  
  const countersData = [
    {
      iconUrl: '/assets/img/icons/counter_icon_1.png',
      number: '11',
      title: 'Active Members',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_2.png',
      number: '23K+',
      title: 'Contributions',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_3.png',
      number: '241+',
      title: 'Projects Complete',
    },
    {
      iconUrl: '/assets/img/icons/counter_icon_4.png',
      number: '4+',
      title: 'Get Togethers',
    },
  ];
  
  const serviceData = {
    subtitle: 'OUR CSR ACTIVITIES',
    title: 'Community Social Responsibility Services',
    description:
      'We are privileged to work with hundreds of future-thinking medial,<br> including many of the world’s top hardware, software, and<br> brands, feel safe and comfortable in establishing.',
    services: [
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_1.png',
        index: '01',
        title: 'CSR 1',
        subtitle: 'Medical competitor research startup to financial',
        link: '/service/service-details',
      },
      {
        backgroundImage: '/assets/img/service_bg.jpg',
        iconUrl: '/assets/img/icons/service_icon_2.png',
        index: '02',
        title: 'CSR 2',
        subtitle: 'Medical competitor research startup to financial',
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
  
  const teamData = {
    subtitle: 'OUR MEMBERS',
    title: 'Meet The Decagon Pride Group <br />Team Members',
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
        imageUrl: '/assets/img/team_8.jpg',
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
  
  const brandData = [
    { image: '/assets/img/envato-logo.png', altText: 'Brand 1' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 2' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 3' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 4' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 5' },
    { image: '/assets/img/envato-logo.png', altText: 'Brand 6' },
  ];
  
  const sectionData = {
    subtitle: 'WHY DECAGON PRIDE',
    title: 'The Pride Counts!',
    services: [
      {
        iconUrl: '/assets/img/icons/service_icon_9.png',
        title: 'Pride Point 1',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_10.png',
        title: 'Pride Point 2',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_11.png',
        title: 'Pride Point 3',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_12.png',
        title: 'Pride Point 4',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_13.png',
        title: 'Pride Point 5',
        subtitle: 'Medical competitor research startup to financial',
      },
      {
        iconUrl: '/assets/img/icons/service_icon_14.png',
        title: 'Pride Point 6',
        subtitle: 'Medical competitor research startup to financial',
      },
    ],
  };
  
  const projectData = {
    title: 'All The Great Work At<br>Decagon Pride',
    subtitle: 'OUR PORTFOLIO',
    description:
      'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
    tabs: [
      { id: 'dental', label: 'Dental' },
      { id: 'cardiology', label: 'Cardiology' },
      { id: 'neurology', label: 'Neurology' },
      { id: 'medical', label: 'Medical' },
    ],
    tabData: [
      {
        id: 'dental',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Dental',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 2,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Laboratory Technologist',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 3,
          },
        ],
      },
      {
        id: 'cardiology',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Laboratory Technologist',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 3,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Dental',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 2,
          },
        ],
      },
      {
        id: 'neurology',
        items: [
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
        ],
      },
      {
        id: 'medical',
        items: [
          {
            imgUrl: '/assets/img/project_3.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_2.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
          {
            imgUrl: '/assets/img/project_1.jpg',
            title: 'Medical Of Working',
            subtitle:
              'We businesss standard chunk of Ipsum used since is Agency &amp; Star tup.',
            index: 1,
          },
        ],
      },
    ],
  };
  
  const ctaData1 = {
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
  
  const medicalTabsData = {
    subtitle: 'Service Offerings',
    title: 'Explore Our Service<br> Offerings',
    tabsTitle: [
      {
        href: 'brain_althim',
        iconUrl: '/assets/img/icons/tab_link_icon_1.png',
        label: 'Financial Empowerment',
      },
      {
        href: 'emergency',
        iconUrl: '/assets/img/icons/tab_link_icon_2.png',
        label: 'Welfare Support',
      },
      {
        href: 'heart_beat',
        iconUrl: '/assets/img/icons/tab_link_icon_3.png',
        label: 'Community Engagement',
      },
      {
        href: 'blood_test',
        iconUrl: '/assets/img/icons/tab_link_icon_4.png',
        label: 'Sustainability & Growth',
      },
    ],
    tabsData: [
      {
        id: 'brain_althim',
        imageSrc: '/assets/img/offerings03.jpg',
        title: 'We are here to hear and heal your',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medial, including many of the world’s top hardware, software, and brands , feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
      {
        id: 'emergency',
        imageSrc: '/assets/img/offerings02.jpg',
        title: 'Treatment patients in primary care',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
      {
        id: 'heart_beat',
        imageSrc: '/assets/img/offerings01.jpg',
        title: 'Accreditation within a given specialty',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
      {
        id: 'blood_test',
        imageSrc: '/assets/img/offerings04.jpg',
        title: 'Better Health While Aging health',
        subtitle:
          'We are privileged to work with hundreds of future-thinking medical, including many of the world’s top hardware, software, and brands, feel safe and comfortable in establishing.',
        points: [
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'Medical sint occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est laborum.',
          },
          {
            icon: '/assets/img/icons/check_icon_1.png',
            text: 'We are occaecat cupidatat non proident, sunt in culpa officia deserunt mollit anim id est healty.',
          },
        ],
        linkHref: '/contact',
        buttonText: 'Read More',
      },
      // Add other tab data here
    ],
  };
  
  const blogsData = {
    sectionTitle: 'OUR BLOG',
    sectionSubtitle: 'Latest Posts &amp; Articles',
    postsData: [
      {
        title: 'Medical Of This Working Health Blog',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_1.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'There Is Only One Thing That Is Hospital.',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_2.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'This Working World and Infection Prevention.',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_3.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
      {
        title: 'Medical Of This Working Health Blog',
        subtitle:
          'Medical standard chunk ofI nibh velit auctor aliquet sollic tudin.',
        date: 'May 02',
        category: 'Medical',
        author: 'Admin',
        thumbnail: '/assets/img/post_1.jpeg',
        btnText: 'Read More',
        postLink: '/blog/blog-details',
        authorIcon: '/assets/img/icons/post_user_icon.png',
        commentIcon: '/assets/img/icons/post_comment_icon.png',
      },
    ],
  };

const page = () => {
    return (
        <div>
        {/* Start Hero Section */}
        <HeroSection data={heroData} />
        {/* End Hero Section */}

      {/* Start CTA Section */}
      <Section
        className={
          'cs_cta cs_style_1 cs_blue_bg position-relative overflow-hidden'
        }
      >
        <CtaSection data={ctaData} />
      </Section>

      {/* End CTA Section */}

      {/* Start About Section */}
      <Section
        topSpaceLg="80"
        topSpaceMd="120"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_about cs_style_1 position-relative"
      >
        <About data={aboutData} />
      </Section>
      {/* End About Section */}

      {/* Start Counter */}
      <Section className="cs_counter_area cs_gray_bg">
        <CounterSection data={countersData} />
      </Section>
      {/* End Counter */}

      {/* Start Service Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className={'cs_gray_bg'}
      >
        <Service cardBg={'cs_gray_bg'} data={serviceData} />
      </Section>
      {/* End Service Section */}

      {/* Start Team Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        className={'cs_team_section position-relative'}
      >
        <TeamSection
          hr={true}
          variant={'cs_pagination cs_style_2'}
          data={teamData}
        />
      </Section>
      {/* End Team Section */}

      {/* Start Brand Section */}
      <Section topSpaceLg="70" topSpaceMd="90" className="cs_brands_section">
        <BrandsSlider data={brandData} />
      </Section>

      {/* End Brand Section */}

      {/* Start Why Choose Us Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_gray_bg cs_bg_filed"
        backgroundImage="/assets/img/service_bg_2.jpg"
      >
        <ChooseUs data={sectionData} />
      </Section>
      {/* End Why Choose Us Section */}

      {/* Start Projects Section */}
      <Section topSpaceLg="70" topSpaceMd="110" className="cs_tabs">
        <ProjectSection data={projectData} />
      </Section>
      {/* End Projects Section */}

      {/* Start CTA Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
        className="cs_cta cs_style_2 cs_blue_bg cs_bg_filed cs_center"
        backgroundImage="/assets/img/cta_bg_1.jpeg"
      >
        <CtaSection1 data={ctaData1} />
      </Section>
      {/* End CTA Section */}

      {/* Start Medical Tab Section */}
      <Section topSpaceLg="70" topSpaceMd="110">
        <MedicalTabSection data={medicalTabsData} />
      </Section>
      {/* End Medical Tab Section */}

      {/* Start Contact Solution */}
      <ContactSection2></ContactSection2>
      {/* End Contact Solution */}

      {/* Start Blog Section */}
      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <BlogSection data={blogsData} />
      </Section>
      {/* End Blog Solution */}

        </div>
    );
};

export default page;