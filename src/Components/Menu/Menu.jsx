import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Navbar,Nav} from 'react-bootstrap';
import styles from './ManageRoutes.module.css';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../logo.svg';
import logofa from '../../images/logofa.png';
import Jump from 'react-reveal/Jump';
import Carousel from '../Carousel/Carousel';
import Index from '../Index/Index';
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}    
const useStyles = makeStyles((theme) => ({
    root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    }
}));
function ScrollTop(props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });
    
    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };        
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default function App() {
    
    return (
        <HashRouter >    
            <React.Fragment>
                <CssBaseline />
                <ElevationScroll >
                    <AppBar>
                        <Toolbar>
                            <Navbar collapseOnSelect expand="lg"  variant="dark" >
                                <Navbar.Brand href="#" >
                                    <img
                                        alt=""
                                        src={logofa}
                                        width="150"
                                        height="60"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="mr-auto">
                                        <li className={styles.navItem}>
                                            <Link to="/" className={styles.navLink}><i className="fas fa-house-user"></i> Educación Profesional</Link>
                                        </li>
                                        <li className={styles.navItem}>
                                            <Link to="/about" className={styles.navLink}><i className="far fa-smile"></i> Educación Formal</Link>
                                        </li>
                                        <li className={styles.navItem}>
                                            <Link to="/contact" className={styles.navLink}><i className="far fa-address-card"></i> Contacto</Link>
                                        </li>                                        
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Toolbar>
                    </AppBar>
                </ElevationScroll>
                <Toolbar id="back-to-top-anchor" /> 
                <Switch>                    
                    <Route path="/">
                        <Index />
                    </Route> 
                </Switch>
                <ScrollTop>
                    <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </React.Fragment>            
            
        </HashRouter>   
    );
    
}