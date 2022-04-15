import React, { useState, useEffect, useMemo } from 'react'
import { AppBar, IconButton, Toolbar, useScrollTrigger, Box, Tabs,
   Tab, Button, Menu, MenuItem, useMediaQuery, useTheme, SwipeableDrawer, List, ListItemButton, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/gravityfullicon.svg';

function ElevationScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const theme = useTheme()
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const [openDrawer, setOpenDrawer] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpenMenu(false)
  }

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false)
    props.setSelectedIndex(i);
    console.log(`Selected index is now ${i}`)
    console.log(`Value index is now ${props.value}`)
  }

  const menuOptions = useMemo(() => ([
    {name: 'Services', link: '/services', activeIndex: 0, selectedIndex: 0},
    {name: 'Custom Integrations', link: '/customintegrations', activeIndex: 0, selectedIndex: 1},
    {name: 'Data Centralization', link: '/datacentralization', activeIndex: 0, selectedIndex: 2},
    {name: 'Data Analysis', link: '/analysis', activeIndex: 0, selectedIndex: 3},
  ]), [])

  const routes = useMemo(() => ([
    {
      name: "Services", 
      link: "/services", 
      activeIndex: 0,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: event => handleClick(event)
    },
    {name: "How It Works", link: "/howitworks", activeIndex: 1},
    {name: "About Us", link: "/about", activeIndex: 2},
  ]), [anchorEl])

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch(window.location.pathname) {
        case `${route.link}`:
          if(props.value !== route.activeIndex) {
            props.setValue(route.activeIndex);
            if (
              route.selectedIndex &&
              route.selectedIndex !== props.selectedIndex
            ) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        case "/contact":
          props.setValue(3);
          break;
        default:
          break;
        }
      });
    }, [props, props.value, menuOptions, props.selectedIndex, routes]);

  const tabs = (
    <>
      <Tabs
        value={props.value}
        onChange={handleChange}
        textColor= "inherit"
        sx={{
          marginLeft: "auto",
        }}
      >
        {
          routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            sx={(theme) => ({
            ...theme.typography.tab,
            minWidth: 10,
            marginLeft: "25px",
            opacity: props.value === route.activeIndex ? 1 : 0.7,
          })}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns} 
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button 
        variant="contained" 
        color="secondary"
        component={Link}
        to="/contact"
        onClick={() => props.setValue(5)}
        sx={(theme) => ({
          ...theme.typography.estimate,
          borderRadius: "50px",
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px",
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
          }
        })}
      >
        Contact
      </Button>
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        keepMounted
        sx={(theme) => ({
          "& .MuiMenu-paper": {
            background: "linear-gradient(280.26deg, #A259FF -2.08%, #E086F6 46.26%, #86C0F6 96.35%)",
            color: 'white'
          },
          zIndex: theme.zIndex.modal + 2,
        })}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
      >
        {menuOptions.map((option, i) => 
          (<MenuItem 
            onClick={(event) => {handleClose(); props.setValue(1); handleMenuItemClick(event, i);}} 
            component={Link} 
            key={i}
            sx={(theme) => ({
              ...theme.typography.tab,
              opacity: 0.6,
              "&:hover": {
                opacity: 1
              },
            })}
            to={option.link}
          >
            {option.name}
          </MenuItem>))}
      </Menu> */}
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer 
        disableBackdropTransition={!iOS} 
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={(theme) => ({
          "& .MuiDrawer-paper": {
            background: "linear-gradient(280.26deg, #A259FF -2.08%, #E086F6 46.26%, #86C0F6 96.35%)",
            color: 'white'
          }
        })}
      >
        <Toolbar
          sx={{
            marginBottom: "3em",
            [theme.breakpoints.down("md")]: {
              marginBottom: "2em"
            },
            [theme.breakpoints.down("xs")]: {
              marginBottome: "1.5em",
            } 
          }}
        />
        <List disablePadding>
          {
            routes.map((route) => (
              <ListItemButton
                key={`${route}${route.activeIndex}`}
                onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}}
                divider
                component={Link}
                sx={{
                  backgroundColor: props.value === route.activeIndex ? theme.palette.common.orange : "",
                }}
                to={route.link}
              >
                <ListItemText
                  disableTypography
                  sx={(theme) => ({
                    ...theme.typography.tab,
                    opacity: props.value === route.activeIndex ? 1 : 0.6,
                  })}
                >
                  {route.name}
                </ListItemText>
              </ListItemButton>
            ))
          }
          <ListItemButton
            onClick={() => {setOpenDrawer(false); props.setValue(5)}}
            divider
            component={Link}
            sx={(theme) => ({
              backgroundColor: props.value === 3 ? theme.palette.common.orange : "",
            })}
            to="/contact"
          >
            <ListItemText 
              disableTypography
              sx={(theme) => ({
               ...theme.typography.tab,
               opacity: props.value === 3 ? 1 : 0.6,
              })}
            >
              Contact
            </ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
      <IconButton 
        disableRipple
        sx = {{
          marginLeft: "auto",
          "&:hover": {
            backgroundColor: "transparent"
          }
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon
          sx={{
            height: "50px",
            width: "50px"
          }}
        />
      </IconButton>      
    </>
  )

  return (
    <>
    {/* new comment */}
      <ElevationScroll>
        <AppBar
          sx={(theme) => ({
            zIndex: theme.zIndex.modal + 1,
            background: "linear-gradient(280.26deg, #A259FF -2.08%, #E086F6 46.26%, #86C0F6 96.35%)"
          })}
        >
          <Toolbar disableGutters>
            <Button 
              component={Link} 
              to="/"
              sx={{
                padding: 0,
                "&:hover": {
                  backgroundColor: "transparent"
                }
              }}
              disableRipple
              onClick={() => props.setValue(0)}
            >
              <Box
                component="img"
                sx={{
                  height: "6em",
                  paddingTop: "1em",
                  paddingBottom: "1em",
                  [theme.breakpoints.down("md")]: {
                    height: "4em"
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "3.5em",
                  }
                }}
                alt="Company Logos"
                src={logo}
              ></Box>
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar
        sx={{
          marginBottom: "3em",
          [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
          },
          [theme.breakpoints.down("xs")]: {
            marginBottome: "1.5em",
          } 
        }}
      />
    </>
  )
}

export default Header