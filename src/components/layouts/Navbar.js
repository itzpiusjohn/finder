import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <hi>
        <i className='fab fa-github' />
        {title}
      </hi>
    </nav>
  );
};
Navbar.defaultProps = {
  title: 'Pius John',
};
Navbar.PropType = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
