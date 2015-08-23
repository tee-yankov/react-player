import React from 'react';
import MainLayout from './MainLayout/MainLayout.jsx';

class Main extends React.Component {
  render() {
    return <div className="main-container">
      <MainLayout />
    </div>;
  }
}

React.render(
  <Main />,
  document.getElementById('react-root')
);
