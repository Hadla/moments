import React from 'react';
import Sidebar from 'react-sidebar';
import '../style/sidebar.css';

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
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: 'white',
            zIndex: 2,
            position: 'absolute',
            top: 0,
            bottom: 0,
            transition: 'transform .3s ease-out',
            WebkitTransition: '-webkit-transform .3s ease-out',
            willChange: 'transform',
            overflowY: 'auto',
          },
        }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>Open sidebar</button>
      </Sidebar>
    );
  }
}

export default SidebarMenu;
