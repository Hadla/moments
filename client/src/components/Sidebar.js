import React from 'react';
import '../style/sidebar.css';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarContent from './SidebarContent';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import logoSmall from '../images/logo-small.png';

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
              <Link to='/home'>
                <img className='logo-home-button' src={logoSmall} />
              </Link>
            </div>
            <div className='button-item'>
              <button
                className='button-item-button'
                onClick={() => {
                  this.toggleSidebar();
                }}
              >
                <MenuIcon className='button-menu-icon' fontSize='large' />
              </button>
            </div>
            <div className='button-item'>
              <button className='button-item-button'>
                <SignOutIcon className='button-menu-icon' fontSize='large' />
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
