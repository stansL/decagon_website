import Link from 'next/link';
import React from 'react';
import Section from './Components/Section';

const NotFound = () => {

  return (
    <>
      {/* Error Content */}
      <Section
        topSpaceLg="120"
        topSpaceMd="150"
        bottomSpaceLg="120"
        bottomSpaceMd="150"
        className="cs_error_section"
      >
        <div className="container">
          <div className="cs_error_content text-center">
            <div className="cs_error_number">
              <span className="cs_error_digit">4</span>
              <div className="cs_error_icon">
                <div className="cs_error_face">
                  <div className="cs_error_eye"></div>
                  <div className="cs_error_eye"></div>
                  <div className="cs_error_mouth"></div>
                </div>
              </div>
              <span className="cs_error_digit">4</span>
            </div>
            <h2 className="cs_error_title">ERROR</h2>
            <p className="cs_error_subtitle">We can&apos;t seem to find the page you are looking for!</p>
            <div className="cs_height_25"></div>
            <Link href="/" className="cs_btn cs_style_1 cs_color_1">
              <span>Back to Home Page</span>
              <i>
                <svg
                  width={13}
                  height={13}
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.0635 3.93555L0.439453 13.5596L0.999609 14.1198L10.6237 4.49576H1.50391V3.93555H10.0635Z" />
                </svg>
              </i>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NotFound;