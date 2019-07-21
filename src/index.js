import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const initState = {
    todoCount:0,
    todoList : [
        {name:"Đi học",status:false},
        {name:"Đi chơi",status:false},
        {name:"Đi về",status:true},
    ],
    doingCount:0,
    doingList : [
        {name:"Đi học",status:false},
        {name:"Đi chơi",status:false},
        {name:"Đi về",status:true},
    ],
    doneCount:0,
    doneList : [
        {name:"Đi học",status:false},
        {name:"Đi chơi",status:false},
        {name:"Đi về",status:true},
    ],

};
export function addTodo() {
    return {
        type: "addTodo"
    };
}
export function delTodo() {
    return {
        type: "delTodo"
    };
}
export function addDoing() {
    return {
        type: "addDoing"
    };
}
export function delDoing() {
    return {
        type: "delDoing"
    };
}
export function addDone() {
    return {
        type: "addDone"
    };
}
export function delDone() {
    return {
        type: "delDone"
    };
}
function reducer(state=initState,action) {
    switch(action.type) {
    case "addTodo" :    
        return {
            doingCount:state.doingCount,
            todoCount:state.todoCount+1,
            doneCount:state.doneCount
        }
    case "delTodo" :
        return {
            doingCount:state.doingCount,
            todoCount:state.todoCount-1,
            doneCount:state.doneCount
        }
    case "addDoing" :    
    return {
        todoCount:state.todoCount,
        doingCount:state.doingCount+1,
        doneCount:state.doneCount
        }  
    case "delDoing" :    
    return {
        todoCount:state.todoCount,
        doingCount:state.doingCount-1,
        doneCount:state.doneCount
        }  
    case "addDone" :    
    return {
        todoCount:state.todoCount,
        doingCount:state.doingCount,
        doneCount:state.doneCount+1
        }  
    case "delDone" :    
    return {
        todoCount:state.todoCount,
        doingCount:state.doingCount,
        doneCount:state.doneCount-1
        } 
    default : return state;
    }
    
}
const store = createStore(reducer);
ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
