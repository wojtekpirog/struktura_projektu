import React from 'react'
import './copyright.css'

export function Copyright(props) {
  return (
    <React.Fragment>
      <div className='copyright'>
        <span>Copyright &copy; {props.year} Exemplery_website.com - Wszelkie prawa zastrzeżone</span>
      </div>
    </React.Fragment>
  )
}