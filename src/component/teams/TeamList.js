import React from 'react'
import { useSelector } from "react-redux";
import Team from './team/Team';

function TeamList() {

    const teams = useSelector(state => state.team.teams);
    
    return ( 
        teams.length>0?
        teams.map((elem)=>(
            <Team teamname={elem}/>
        )):<h6>Please Add Teams</h6>
        
    )
}

export default TeamList;
