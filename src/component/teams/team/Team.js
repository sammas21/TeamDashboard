import React from 'react'

function Team(props) {
    return (
        <div class="info-strip">
            <div class="info-strip-body">
                {props.teamname}
            </div>
            <div class="info-strip-end"></div>
        </div>
    )
}

export default Team;
