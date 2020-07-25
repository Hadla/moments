import React from 'react';
import Sidebar from 'react-sidebar';
import '../style/sidebar.css';
import logo from '../images/logo-white.png';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarContent from './SidebarContent';

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
        sidebarClassName='sidebar-sidebar'
        sidebar={
          <div>
            <img className='sidebar-logo' src={logo} />
            <SidebarContent />
          </div>
        }
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        style={{
          sidebar: {
            zIndex: 2,
            position: 'absolute',
            top: 0,
            bottom: 0,
            transition: 'transform .3s ease-out',
            WebkitTransition: '-webkit-transform .3s ease-out',
            willChange: 'transform',
            overflowY: 'auto',
          },
          content: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            transition: 'left .3s ease-out, right .3s ease-out',
          },
          overlay: {
            zIndex: 1,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
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
          <MenuIcon className='menu-icon' fontSize='large' />
        </button>
      </Sidebar>
    );
  }
}

// https://www.npmjs.com/package/react-sidebar

export default SidebarMenu;
