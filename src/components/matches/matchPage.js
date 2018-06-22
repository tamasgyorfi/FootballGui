import React from 'react'
import Header from '../panels/header'
import MatchList from './matchList'
import MenuBar from '../panels/sidebar'

const matchPage = (props) => {
  return (
    <div>
      <Header />
      <MenuBar >
      	<MatchList />
      </MenuBar>
    </div>
  );
}

export default matchPage;