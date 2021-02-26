import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Bio.css'

const Bio = (props) => {
    return(
        <>
            <div className="row mt-4">
                <div className="col-12 bio-main-text mb-2">
                    <span className="mr-3">{props.name ?? 'User Name'} </span>
                    <span className="ml-3"><FontAwesomeIcon icon={faCog} className="text-secondary"/></span>
                </div>

                <div className="col-4 text-center bio-second-text p-0">Posts</div>
                <div className="col-4 text-center bio-second-text p-0" bio-second-text p-0>Following</div>
                <div className="col-4 text-center bio-second-text p-0">Followers</div>

                <div className="col-4 text-center bio-second-text p-0">{props.post}</div>
                <div className="col-4 text-center bio-second-text p-0" bio-second-text p-0>{props.following}</div>
                <div className="col-4 text-center bio-second-text p-0">{props.follower}</div>
            </div>
        </>
    )
}
export default Bio
