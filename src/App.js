import './App.css';
import {AppBar, Hidden, Tab, Tabs, Typography} from "@material-ui/core";
import {useState} from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{height: '100%'}}
            {...other}
        >
            {value === index &&
            <>
                {children}
            </>
            }
        </div>
    );
}

function App() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="App" style={{overflow: 'hidden'}}>
            <MuiThemeProvider>
                <AppBar position="sticky" style={{background: 'lightslategray'}}>
                    <Hidden smDown>
                        <Typography variant={"h4"}
                                    style={{
                                        position: "absolute",
                                        padding: '5px',
                                        fontFamily: ['Open Sans'],
                                        fontSize: '2rem'
                                    }}>
                            Drew Colgin
                        </Typography>
                    </Hidden>
                    <Hidden mdUp>
                        <Typography variant={"h4"}
                                    style={{
                                        position: "absolute",
                                        padding: '5px',
                                        fontFamily: ['Open Sans'],
                                        fontSize: '2rem'
                                    }}>
                            DC
                        </Typography>
                    </Hidden>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Home"/>
                        <Tab label="About"/>
                        <Tab label="CV"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <HomePage/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AboutPage/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
