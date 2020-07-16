import React from 'react';

function Header() {
  return (
    <div>
      {/* <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Hadla Bergman</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/'
            exact
            render={() => (
              <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />
            )}
          />
          <Route path='/about' render={() => <AboutPage title={this.state.about.title} />} />
          <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} />} />
          <Route path='/projects' render={() => <ProjectsPage subTitle={this.state.projects.subTitle} />} />

          <Footer />
        </Container>
      </Router> */}
    </div>
  );
}

export default App;
