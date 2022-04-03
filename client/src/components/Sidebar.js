import React from 'react';
import '../style/sidebar.css';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarContent from './SidebarContent';
import SignOutIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom';
import logoSmall from '../images/logo-small.png';
import { connect } from 'react-redux';
import { settingsActions } from '../actions';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleSidebar() {
    this.setState({ ...this.state, open: !this.state.open });
  }

  componentDidMount() {
    this.sidebarRef = window.document.getElementById('sidebar');
  }

  render() {
    return (
      <div className='sidebar-sidebar-container'>
        <div id='sidebar' className={'sidebar-sidebar ' + (this.props.open ? 'open' : 'hidden')}>
          <SidebarContent />
        </div>
        <div className='sidebar-content'>
          <div className='button-menu'>
            <div className='button-item'>
              <Link to='/home'>
                <img className='logo-home-button' alt="logo" src={logoSmall} />
              </Link>
            </div>
            <div className='button-item'>
              <button
                className='button-item-button'
                onClick={() => {
                  this.props.toggleSidebar();
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
const mapStateToProps = (state) => {
  return { open: state.settings.open };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSidebar: () => dispatch({ type: settingsActions.TOGGLE_SIDEBAR_ACTION }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
