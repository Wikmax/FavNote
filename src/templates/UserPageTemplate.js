import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => (
  <>
    <Sidebar />
    {children}
  </>
);
UserPageTemplate.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
};

export default UserPageTemplate;
