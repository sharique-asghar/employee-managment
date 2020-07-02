import React from 'react';
const { PageHead } = require('precise-ui');
const breadcrumbs = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Create New Employee',
    to: '/create',
  }
];

function Header(props) {
    return (
        <PageHead title={props.title} breadcrumbs={breadcrumbs} />
    );
}

export default Header;