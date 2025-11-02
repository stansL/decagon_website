'use client';
import PageHeading from '@/app/Components/PageHeading';
import Section from '@/app/Components/Section';
import SectionHeading from '@/app/Components/SectionHeading';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaFileDownload, FaFilePdf, FaFilter } from 'react-icons/fa';

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
    date: '15/01/20',
    category: 'Constitution',
    downloadLink: '/downloads/constitution.pdf',
    icon: <FaFilePdf />,
  },
  {
    id: 2,
    title: 'October 2025 Meeting Minutes',
    description: 'Minutes from the October 2025 group meeting',
    fileSize: '1.8 MB',
    fileType: 'PDF',
    date: '05/10/25',
    category: 'Minutes',
    downloadLink: '/downloads/meeting-minutes-oct-2025.pdf',
    icon: <FaFilePdf />,
  },
  {
    id: 3,
    title: 'September 2024 Meeting Minutes',
    description: 'Minutes from the September 2024 group meeting',
    fileSize: '1.6 MB',
    fileType: 'PDF',
    date: '07/09/24',
    category: 'Minutes',
    downloadLink: '/downloads/meeting-minutes-sep-2024.pdf',
    icon: <FaFilePdf />,
  },
  {
    id: 4,
    title: 'August 2024 Meeting Minutes',
    description: 'Minutes from the August 2024 group meeting',
    fileSize: '1.7 MB',
    fileType: 'PDF',
    date: '03/08/24',
    category: 'Minutes',
    downloadLink: '/downloads/meeting-minutes-aug-2024.pdf',
    icon: <FaFilePdf />,
  },
  {
    id: 5,
    title: 'July 2024 Meeting Minutes',
    description: 'Minutes from the July 2024 group meeting',
    fileSize: '1.5 MB',
    fileType: 'PDF',
    date: '06/07/24',
    category: 'Minutes',
    downloadLink: '/downloads/meeting-minutes-jul-2024.pdf',
    icon: <FaFilePdf />,
  },
];

const DownloadsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ['All', ...new Set(downloadsData.map(item => item.category))];
    return cats;
  }, []);

  // Extract unique years from dates
  const years = useMemo(() => {
    const yearSet = new Set(downloadsData.map(item => {
      const dateParts = item.date.split('/');
      return `20${dateParts[2]}`; // Convert yy to yyyy
    }));
    return ['All', ...Array.from(yearSet).sort().reverse()];
  }, []);

  // Filter documents based on selected filters
  const filteredDocuments = useMemo(() => {
    return downloadsData.filter(item => {
      const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
      
      if (selectedYear === 'All') {
        return categoryMatch;
      }
      
      const dateParts = item.date.split('/');
      const itemYear = `20${dateParts[2]}`;
      const yearMatch = itemYear === selectedYear;
      
      return categoryMatch && yearMatch;
    });
  }, [selectedCategory, selectedYear]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

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
          
          {/* Filter Section */}
          <div className="cs_downloads_filter">
            <div className="cs_filter_header">
              <FaFilter className="cs_filter_icon" />
              <span className="cs_filter_label">Filter Documents</span>
            </div>
            
            <div className="cs_filter_controls">
              {/* Category Filter */}
              <div className="cs_filter_group">
                <label className="cs_filter_title">Document Type:</label>
                <div className="cs_filter_buttons">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`cs_filter_btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Filter */}
              <div className="cs_filter_group">
                <label className="cs_filter_title" htmlFor="yearFilter">Year:</label>
                <select
                  id="yearFilter"
                  className="cs_filter_select"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="cs_filter_results">
              Showing {filteredDocuments.length} of {downloadsData.length} documents
            </div>
          </div>

          <div className="cs_height_40 cs_height_lg_40"></div>
          
          {/* Documents Grid */}
          {filteredDocuments.length > 0 ? (
            <div className="row">
              {filteredDocuments.map((item) => (
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
                      <span className="cs_download_file_date">{item.date}</span>
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
          ) : (
            <div className="cs_no_results">
              <p>No documents found matching your filters.</p>
              <button 
                className="cs_btn cs_style_1 cs_color_1"
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedYear('All');
                }}
              >
                <span>Clear Filters</span>
              </button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default DownloadsPage;
