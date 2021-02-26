import React from 'react'
import { connect } from 'react-redux'
import Avatar from '../../../components/atoms/Avatar';
import Bio from '../../../components/molecules/Bio';

const Profile = (props) => {
    const initialState = props.inititalState;
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-5 text-center">
                            <Avatar />
                        </div>
                        <div className="col-7">
                            <Bio 
                            name={initialState.name}
                            post={initialState.post}
                            following={initialState.following}
                            follower={initialState.follower}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const reduxState = (state) => {
    return {
        inititalState : state.initialReducer
    }
}

export default connect(reduxState,null)(Profile)