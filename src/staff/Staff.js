import React from 'react'
import './staff.css'
import { staff } from '../data/dataItems'

export function CompanyStaff() {
  return (
    <React.Fragment>
      <div className='staff'>
        <h2>A oto <strike>pracownicy</strike> gwiazdy naszej firmy:</h2>
        <ul>
          {staff.map((employee, index) => { return <li key={index + 1}><a href='#'>{employee.name} {employee.surname}, {employee.age} lat</a></li> })}
        </ul>
      </div>
    </React.Fragment>
  )
}