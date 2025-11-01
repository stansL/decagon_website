import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import SectionHeading from '@/app/Components/SectionHeading';
import React from 'react';
import Link from 'next/link';
import { FaFileDownload, FaFilePdf } from 'react-icons/fa';

const headingData = {
  backgroundImage: '/assets/img/page_heading_bg.jpg',
  title: 'Downloads',
};

const downloadsData = [
  {
    id: 1,
    title: 'Constitution',
    description: 'Decagon Pride Group Constitution and bylaws document',
    fileSize: '2.5 MB',
    fileType: 'PDF',
    downloadLink: '/downloads/constitution.pdf',
    icon: <FaFilePdf />,
  },
  {
    id: 2,
    title: 'Last Meeting Minutes',
    description: 'Minutes from the most recent group meeting',
    fileSize: '1.8 MB',
    fileType: 'PDF',
    downloadLink: '/downloads/meeting-minutes.pdf',
    icon: <FaFilePdf />,
  },
];

const DownloadsPage = () => {
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
        <div className="container">
          <SectionHeading
            SectionSubtitle="DOCUMENT CENTER"
            SectionTitle="Available Downloads"
            variant="text-center"
          />
          <div className="cs_height_50 cs_height_lg_50"></div>
          
          <div className="row">
            {downloadsData.map((item) => (
              <div className="col-lg-6" key={item.id}>
                <div className="cs_download_card cs_style_1">
                  <div className="cs_download_card_icon cs_center">
                    <i className="cs_file_icon">{item.icon}</i>
                  </div>
                  <div className="cs_download_card_info">
                    <h3 className="cs_download_card_title">{item.title}</h3>
                    <p className="cs_download_card_subtitle">{item.description}</p>
                    <div className="cs_download_card_meta">
                      <span className="cs_download_file_type">{item.fileType}</span>
                      <span className="cs_download_file_size">{item.fileSize}</span>
                    </div>
                  </div>
                  <div className="cs_download_card_btn">
                    <Link 
                      href={item.downloadLink} 
                      className="cs_btn cs_style_1 cs_color_1"
                      download
                    >
                      <span>Download</span>
                      <i>
                        <FaFileDownload />
                      </i>
                    </Link>
                  </div>
                </div>
                <div className="cs_height_30 cs_height_lg_30"></div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default DownloadsPage;
