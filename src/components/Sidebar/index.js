import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap} from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to= "about">About</SidebarLink>
          <SidebarLink to= "discovered">Discovered</SidebarLink>
          <SidebarLink to= "services"> Services </SidebarLink>
          <SidebarLink to= "signup"> Sign Up</SidebarLink>
        </SidebarMenu>
         <SideBtnWrap>
           <SidebarRoute to="/">Sign In</SidebarRoute>
         </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
