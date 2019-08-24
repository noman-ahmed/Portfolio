import React from 'react'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Front End Developer | Noman Ahmed" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main special">
                <header className="major">
                  <h2>My Story</h2>
                </header>
                <p>More to come.</p>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <p>More to come.</p>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Work</h2>
            </header>
            <p>More to come.</p>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Contact</h2>
            </header>
            <p>More to come.</p>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
