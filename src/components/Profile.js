import React from 'react';
import PropTypes from 'prop-types';

const Profile = props => (
  <div>
    <h4 id='profile'>{props.profileText}</h4>
  </div>
);

Profile.propTypes = {
  profileText: PropTypes.string,
};

Profile.defaultProps = {
  profileText: 'Caleb Kim',
};

export default Profile;
