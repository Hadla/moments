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
