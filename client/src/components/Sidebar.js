import React from 'react';
import Sidebar from 'react-sidebar';
import '../style/sidebar.css';
import logo from '../images/logo-white.png';
import MenuIcon from '@material-ui/icons/Menu';

class SidebarMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        className='sidebar-sidebar'
        sidebar={<img className='sidebar-logo' src={logo} />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: '#4261a3',
            width: '14rem',
            zIndex: 2,
            position: 'absolute',
            transition: 'transform .3s ease-out',
            WebkitTransition: '-webkit-transform .3s ease-out',
            willChange: 'transform',
            overflowY: 'auto',
          },
          root: {
            position: 'absolute',
            overflow: 'hidden',
          },
          content: {
            position: 'absolute',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            transition: 'left .3s ease-out, right .3s ease-out',
          },
          overlay: {
            zIndex: 1,
            position: 'fixed',
            opacity: 0,
            visibility: 'hidden',
            transition: 'opacity .3s ease-out, visibility .3s ease-out',
            backgroundColor: 'rgba(0,0,0,.3)',
          },
          dragHandle: {
            zIndex: 1,
            position: 'fixed',
            top: 0,
            bottom: 0,
          },
        }}
      >
        <button className='menu-icon-button' onClick={() => this.onSetSidebarOpen(true)}>
          <MenuIcon color='white' fontSize='medium' />
        </button>
      </Sidebar>
    );
  }
}

// https://www.npmjs.com/package/react-sidebar

export default SidebarMenu;
