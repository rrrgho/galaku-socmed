import React from 'react'
import PostHeader from '../../../components/molecules/Post/PostHeader'
import PostImage from '../../../components/molecules/Post/PostImage'
import PostInteract from '../../../components/molecules/Post/PostInteract'
import PostStatus from '../../../components/molecules/Post/PostStatus'

const Post = () => {
    return(
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="card">
                        <div className="card-body">
                            <PostHeader  />
                            <PostImage />
                            <div className="timeline-content">
                                <PostStatus />
                                <PostInteract />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Post