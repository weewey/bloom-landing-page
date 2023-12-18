import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company } = config;
  const { logo, name: companyName } = company;
  // const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            href="https://jy3jfd69d9o.typeform.com/to/opfQJJu7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-md shadow text-background bg-primary hover:bg-border hover:text-secondary py-2 px-4">
              We value your feedback! Help us improve by taking our quick survey
            </button>
          </a>
        </div>
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};
export default About;
