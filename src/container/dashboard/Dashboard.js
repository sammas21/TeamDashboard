import React from 'react'
import { connect } from 'react-redux';
import Header from '../../component/header/Header'
import LeftPanel from '../../component/left-panel/LeftPanel'
import DisplayPanel from '../../component/display-panel/DisplayPanel'
import * as actionTypes from '../../store/actions';


function Dashboard() {
    return (
        <div class="container-fluid">        
            <Header/>
            <div class="main-block fl-container">
                <LeftPanel/>
                <DisplayPanel/>   
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {

        ctr: state.team.teams,
        //storedResults: state.res.results
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.ADDTEAM}),
        onDecrementCounter: () => dispatch({type: actionTypes.ADDUSER}),
        onAddCounter: () => dispatch({type: actionTypes.DELETEUSER, val: 10}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
