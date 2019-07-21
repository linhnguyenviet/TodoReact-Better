import React , { Component } from 'react';
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing:false,
            editValue:""
        }
    }
    changeEditing = () => {
        this.setState({isEditing:!this.state.isEditing})
    }
    handleEdit = (e) => {
        this.setState({ editValue: e.target.value})
    }
    render() {
        return (
            <div> 
                <div >
                    <div className="todo__time"><i class="far fa-calendar-alt"> </i> 7/15/2019, 10:34:18 PM</div>
                    {this.state.isEditing ? 
                    <div className="editField">
                        <div className="editField__input">
                            <input type="text" onChange={this.handleEdit}/>
                        </div>
                        <div className="editField__btn">
                            <i  onClick={()=> {
                                this.props.editTodo(this.props.index,this.state.editValue);
                                this.changeEditing();
                            }} className="fas fa-check btn--green"></i>
                            <i onClick={this.changeEditing}className="fas fa-ban"></i>
                        </div>
                        <div className="Task__editing-bgr"></div>
                    </div>
                    : null }
                </div>
                { !this.state.isEditing ? 
                <>
                <div className="todoContent">
                        <p className = "todo__text">
                            {this.props.number}
                        </p>
                </div>
                <div className = "btnGroup">
                    <button className ="btn btn--row btn--purple" onClick={this.changeEditing}> <i class="far fa-edit"></i></button>
                    <button className ="btn btn--row btn--red" onClick = {() => this.props.deleteItem(this.props.index)} ><i class="far fa-trash-alt"></i></button>
                </div>
                </>
                   : null }   
            </div>
        )
    }
}
export default TodoList ;