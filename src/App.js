import React, { Fragment, useState } from 'react';
import {Icon} from "semantic-ui-react"
import './App.css';
import { Grid } from "semantic-ui-react"
import Avatar from "./components/avatar/avatar"
import Chat from "./components/linechat/chat"
import Address from "./components/addressbook/address"
import Collect from "./components/collect/collect"
import Folder from "./components/folder/folder"
import News from "./components/news/news"
import Phone from "./components/phone/phone"
import Moreoperates from "./components/moreoperates/moreoperates"
import Chatpage from "./pages/chat/index"
import Addresspage from "./pages/address/index"

function App() {
  const [show, setShow] = useState('chat')
  //change page function
  function switchPage(value) {
    setShow(value)
  }
  return (
    <Grid divided className="app-layout" Column="3">
      <Grid.Column className="left-layout">
        <Avatar />
        <Chat switchPage={switchPage} />
        <Address switchPage={switchPage} />
        <Collect />
        <Folder />
        <News />
        <div className="bottom-container">
          <Phone />
          <Moreoperates />
        </div>
      </Grid.Column>
      {
        show === 'chat' ?<Chatpage />: null
      }
      {
        show === 'address' ?<Addresspage/>: null
      }
    </Grid>
  );
}

export default App;
