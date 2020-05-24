import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from 'styled-components';

import ResponsiveTabBar2 from './navigation/ResponsiveTabBar2'
import Tab from './navigation/Tab'
import theme from '../styles/themes/default'


const StyledLayout = styled.div.attrs(props => ({
  bannerHeight: props.thickness || props.theme.thickness('md')
}))`

  .nav {
    position: static;
  }

  overflow: auto;

  .page {
    position: relative;
    top: ${props => props.bannerHeight};
  }

  // .horizontal {
  //   &.page {
  //     top
  //   }
  // }
  
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
  },
  {
    label: 'FAQ',
    index: 3
  }
];

const pages = {
  0: <h1>Home</h1>,
  1: <h1>About</h1>,
  2: <h1>Contact</h1>,
  3: <h1>FAQ</h1>,
};

/*
.page {
	padding: 2rem;
	position: relative;
	display: flex;
	flex: 1 1 auto;
}

.layout {
	width: 100%;
	height: inherit;
	display: flex;
	&.horizontal {
		flex-direction: column;
	}
}
*/

const Layout = ({children}) => {
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

  return (
    <ThemeProvider theme={theme}>
    <StyledLayout className={vertical ? '' : 'horizontal'}>
      <ResponsiveTabBar2 className="nav" selected={selected} vertical={vertical}>
        { tabElements }
      </ResponsiveTabBar2>
      <div className="page">
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
        { children }
      </div>
    </StyledLayout>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
