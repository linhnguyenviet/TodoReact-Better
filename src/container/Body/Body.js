import React , { Component } from 'react';
import './Body.css'
import TodoBox from '../TodoBox/TodoBox';
import DoingBox from '../DoingBox/DoingBox';
import DoneBox from '../DoneBox/DoneBox';
class Body extends Component {
 
    render() {
       
        return (
            <div className="Body">
                <h1>ToDo App</h1>
                <div className="setting">
                    <p>
                        <i class="fas fa-cog"></i>
                    </p>
                </div>
                    <div className="Body__wrapper Body__wrapper--singleMode">
                        <TodoBox name="TO DO" id="1"></TodoBox>
                        <DoingBox name="DOING"></DoingBox>
                        <DoneBox name="DONE" id="3"></DoneBox>
                    </div>
            </div>
        )
    }
}
export default Body ;