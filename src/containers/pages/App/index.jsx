import React, {Component} from 'react'
import Post from '../../organisms/Post'
import Profile from '../../organisms/Profile'




class App extends Component{
    
    render(){
        return (
            <>
                <div className="row p-5">
                    <div className="col-3">
                        <Profile />
                    </div>
                    <div className="col-6">
                        <Post />
                    </div>
                </div>
            </>
        )
    }

    
}





export default App