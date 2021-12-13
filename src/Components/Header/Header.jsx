import React from "react";
import './Header.css';
import headerlogo from '../../Assests/HeaderDashboard/headerlogo.png'
import search from '../../Assests/HeaderDashboard/search.png'
import refresh from '../../Assests/HeaderDashboard/refresh.png'
import ListView from '../../Assests/HeaderDashboard/ListView.png'
import settings from '../../Assests/HeaderDashboard/settings.png'
import apps from '../../Assests/HeaderDashboard/apps.png'
import account from '../../Assests/HeaderDashboard/account.png'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import { connect } from 'react-redux';


function HeaderSection(props) {
    const drawerMenu = () => {
        props.ListentoMenu(true)
    }

    return (
        <div>
            <div className="HeaderSection1">
                <div className="Section1">
                    <img src={"https://img.icons8.com/material-outlined/50/000000/menu--v1.png "} alt="" onClick={drawerMenu} />
                    <img id="logo" src={headerlogo} alt="" />
                    <h2>{props.changeText}</h2>
                </div>
                <div className="Section2">
                    <div className="SearchSec">
                        <Paper
                            component="form"
                            sx={{ p: '7px 2px', display: 'flex', alignItems: 'center', width: 700, backgroundColor: "lightgrey" }}
                        >
                            <img id="search" src={search} alt="" />
                            <InputBase
                                sx={{ ml: 2, flex: 1 }}
                                placeholder="Search "
                                inputProps={{ 'aria-label': 'search ' }}
                            />
                        </Paper>
                    </div>
                    <div className="IconSec">
                        <img id="refresh" src={refresh} alt="" />
                        <img id="List" src={ListView} alt="" />
                        <img id="settings" src={settings} alt="" />

                    </div>

                </div>
                <div className="Section3">

                    <img id="apps" src={apps} alt="" />
                    <img id="account" src={account} alt="" />

                </div>
            </div>
        </div>
    )

}
const mapStateToProps = state => {
    return {
        changeText: state.navReducer.changeoption
    }
}

export default connect(mapStateToProps)(HeaderSection);
