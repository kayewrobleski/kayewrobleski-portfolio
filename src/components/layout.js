import React from "react"
import styled, { ThemeProvider } from 'styled-components'

import ResponsiveTabBar from './navigation/ResponsiveTabBar'
import Tab from './navigation/Tab'
import theme from '../styles/themes/default'

import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'

const StyledLayout = styled.div`
  .nav {
    position: static;
  }

  overflow: auto;
  // margin: auto;
  width: 70%;
  margin: auto;
  ${props => props.theme.breakpoints.down('xs')} {
      width: 95%;
      margin: auto;
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

  const vertical = false;
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
