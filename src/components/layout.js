import React from "react"
import styled, { ThemeProvider } from 'styled-components'

import ResponsiveTabBar from './navigation/ResponsiveTabBar'
import Tab from './navigation/Tab'
import theme from '../styles/themes/default'

import HomePage from '../pages/Home'
import AboutPage from '../pages/About'
import ContactPage from '../pages/Contact'

const StyledLayout = styled.div`
  .nav {
    position: static;
  }

  overflow: auto;

  ${props => props.theme.breakpoints.up('md')} {
      width: 70%;
      margin: auto;
  }

  ${props => props.theme.breakpoints.down('sm')} {
      width: 100%;
  }
`
const tabs = [
  {
    label: 'Home',
    index: 0
  },
  {
    label: 'About',
    index: 1
  },
  {
    label: 'Contact',
    index: 2
  }
];

const pages = {
  0: <HomePage />,
  1: <AboutPage />,
  2: <ContactPage />
};

const Layout = (props) => {
  const [selected, setSelected] = React.useState(0);

  const handleChange = (index) => {
      setSelected(index);
  }

  const tabElements = tabs.map(props => <Tab 
      {...props} 
      key={props.label} 
      selected={selected==props.index} 
      clickHandler={() => handleChange(props.index)} />);

  const vertical = window.innerWidth < 600;
  const page = pages[selected];
  console.log(page);

  return (
    <ThemeProvider theme={props.theme}>
    <StyledLayout className={vertical ? '' : 'horizontal'}>
      <ResponsiveTabBar className="nav" selected={selected} vertical={vertical}>
        { tabElements }
      </ResponsiveTabBar>
        { pages[selected] }
    </StyledLayout>
    </ThemeProvider>
  )
}

Layout.defaultProps = {
  theme: theme
}

export default Layout
