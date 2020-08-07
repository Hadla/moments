import React from 'react';
import '../style/sidebar.css';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarContent from './SidebarContent';
import SignOutIcon from '@material-ui/icons/ExitToApp';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }

  toggleSidebar() {
    console.log('sdkjhs');
    if (this.state.open) {
      this.sidebarRef.classList.add('hidden');
      this.sidebarRef.classList.remove('open');
    } else {
      this.sidebarRef.classList.add('open');
      this.sidebarRef.classList.remove('hidden');
    }
    this.setState({ ...this.state, open: !this.state.open });
  }

  componentDidMount() {
    this.sidebarRef = window.document.getElementById('sidebar');
  }

  render() {
    return (
      <div>
        <div id='sidebar' className='sidebar-sidebar'>
          <SidebarContent />
        </div>
        <div className='sidebar-content'>
          <div className='button-menu'>
            <div className='button-item'>
              <button
                className='button-item-button'
                onClick={() => {
                  this.toggleSidebar();
                }}
              >
                <MenuIcon />
              </button>
            </div>
            <div className='button-item'>
              <button className='button-item-button'>
                <SignOutIcon />
                Signout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
