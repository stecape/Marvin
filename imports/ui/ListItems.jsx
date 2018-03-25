import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default [{
  key: 'Home',
  primaryText: 'Home',
  leftIcon: <FontIcon>home</FontIcon>,
  to: '/',
}, {
  key: 'Commands',
  primaryText: 'Commands',
  leftIcon: <FontIcon>touch_app</FontIcon>,
  to: '/Commands',
}, {
  key: 'Overview',
  primaryText: 'Overview',
  leftIcon: <FontIcon>timeline</FontIcon>,
  to: '/Overview',
}, {
  key: 'Accounting',
  primaryText: 'Accounting',
  leftIcon: <FontIcon>account_balance_wallet</FontIcon>,
  to: '/Accounting',
}, {
  key: 'Docs',
  primaryText: 'Docs',
  leftIcon: <FontIcon>library_books</FontIcon>,
  to: '/Docs',
}];