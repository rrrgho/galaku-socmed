import React from 'react'
import Avatar from '../../../atoms/Avatar'
import './PostHeader.css'

const PostHeader = () => {
    return (
        <>
            <div className="new-users-social">
                <div className="media">
                    <Avatar/>
                    <div className="media-body">
                        <h6 className="mb-0 f-w-700">ELANA</h6>
                        <p>January, 12,2019</p>
                    </div>
                    <span className="pull-right mt-0"><i data-feather="more-vertical" /></span>
                </div>
            </div>
        </>
    )
}
export default PostHeader