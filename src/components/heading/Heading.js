import React, { Component } from 'react'
import './heading.css'
import { CompanyStaff } from '../../staff/Staff'

export class Heading extends Component {
  constructor() {
    super()
    this.state = { link1: 'Strona Główna', link2: 'Blog', link3: 'Artykuły' }
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <nav>
            <ul className="navigation">
              <li>
                <a href="#">{this.state.link1}</a>
              </li>
              <li>
                <a href="#">{this.state.link2}</a>
              </li>
              <li>
                <a href="#">{this.state.link3}</a>
              </li>
            </ul>
          </nav>
        </div>
        <CompanyStaff />
      </React.Fragment>
    );
  }
}
