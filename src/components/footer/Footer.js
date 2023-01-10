import React, { useState } from 'react'
import './footer.css'
import { Copyright } from '../copyright/Copyright'

export function Footer() {
  const [state, setState] = useState({link1: 'Regulamin', link2: 'FAQ', link3: 'O nas'})

  return (
    <React.Fragment>
      <div>
        <footer>
          <ul className='footer'>
            <li>
              <a href="#">{state.link1}</a>
            </li>
            <li>
              <a href="#">{state.link2}</a>
            </li>
            <li>
              <a href="#">{state.link3}</a>
            </li>
          </ul>
        </footer>
        <Copyright year='2023' />
      </div>
    </React.Fragment>
  );
}
