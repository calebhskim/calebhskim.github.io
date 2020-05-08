import React from 'react';
import PropTypes from 'prop-types';

import Github from './Github';
import Instagram from './Instagram';
import LinkedIn from './LinkedIn';
import Projects from './Projects';
import Resume from './Resume';

const Links = (props) => {
  const { changeText } = props;

  return (
    <div className='container'>
      <a
        className='github'
        href='https://github.com/calebhskim/'
        target='WOB_GITHUB'
        onMouseOver={() => changeText('Github')}
        onMouseOut={() => changeText('Caleb Kim')}
      >
        <Github />
      </a>
      <a
        className='insta'
        href='https://www.instagram.com/b.limits/'
        target='WOB_INSTA'
        onMouseOver={() => changeText('Instagram')}
        onMouseOut={() => changeText('Caleb Kim')}
      >
        <Instagram />
      </a>
      <a
        className='linkedin'
        href='https://www.linkedin.com/in/calebhskim/'
        target='WOB_LINKEDIN'
        onMouseOver={() => changeText('LinkedIn')}
        onMouseOut={() => changeText('Caleb Kim')}
      >
        <LinkedIn />
      </a>
      <a
        className='projects'
        href='https://calebhskim.github.io/'
        target='WOB_PROJECTS'
        onMouseOver={() => changeText('Projects')}
        onMouseOut={() => changeText('Caleb Kim')}
      >
        <Projects />
      </a>
      <a
        className='resume'
        href='http://calebkim.me/CalebKimResume.pdf'
        target='WOB_RESUME'
        onMouseOver={() => changeText('Resume')}
        onMouseOut={() => changeText('Caleb Kim')}
      >
        <Resume />
      </a>
    </div>
  );
};

Links.propTypes = {
  changeText: PropTypes.func.isRequired,
};

Links.defaultProps = {};

export default Links;
