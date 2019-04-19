import React from 'react'

import {
  Search,
  Title,
  Controller
} from './styled'

import GlobeIcon from '@/static/svg/globe.svg'
import CalendarIcon from '@/static/svg/calendar.svg'

export default () => {
  return(
    <Search>
      <div>
        <Title>
          <div>FINED YOUR</div>
          <div>HOLYDAYS</div>
        </Title>
        <Controller>
          <div>
            <span>Where</span>
            <input type="text" placeholder="distination"/>
            <GlobeIcon viewBox="0 0 14 16" preserveAspectRatio="xMaxYMax meet"/>
          </div>
          <div>
            <span>When</span>
            <input type="text" placeholder="select date"/>
            <CalendarIcon viewBox="0 0 15 16" preserveAspectRatio="xMaxYMax meet"/>
          </div>
          <button>Search</button>
        </Controller>
      </div>
    </Search>
  )
}