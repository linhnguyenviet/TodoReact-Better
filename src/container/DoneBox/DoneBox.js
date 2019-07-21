import React , { Component } from 'react';
import TodoList from '../../components/TodoList/TodoList'
import '../DoneBox/DoneBox.css'
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { addDone, delDone } from '../../index'; 

class DoneBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:this.props.doneList,
            modalIsOpen: false,
            isEditing:false
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }
    
      afterOpenModal() {
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }

    handleInput = (e) => {
        this.setState({ input: e.target.value})
    }

    deleteItem = (pos) => {
        var data = this.state.num ;
        data = data.filter( (item,index) => index !== pos )
        this.props.delDone();
        this.setState({
        num:data
        })
    }

    addTodo = () => {
        const newArr = this.state.num.concat({name:this.state.input,status:false})
        this.setState({num:newArr})
    }

    editTodo = (index,value) => {
        var data = this.state.num ;
        data[index].name = value;
        this.setState({
            num:data
        })
    }
    render() {
       
        const list = this.state.num.map((item,index)=>{
            return (
                <div className="TodoItem__wrapper" draggable>
                    <TodoList  number={item.name} status ={item.status} 
                    isEditing={this.state.isEditing} 
                    index={index}
                    deleteItem={this.deleteItem}
                    editTodo = {this.editTodo} 
                    time={Date.now()}
                     
                    > 
                    </TodoList>
                </div>
            )
        })
        
        return (
           
            <div className="gridItem">
                <div className = "gridItem__header">
                    <div className ="header__left" >
                        <p> 
                            <span className="numberItems">{this.props.doneCount+3}</span>
                            {this.props.name}
                         </p>
                    </div>
                    <div className ="header__right">
                        <button className="btn btn--blue" onClick={this.openModal}>+ New Task</button>
                        <Modal
                            isOpen={this.state.modalIsOpen}
                            onAfterOpen={this.afterOpenModal}
                            onRequestClose={this.closeModal}
                            contentLabel="Example Modal"
                            className ="addModal"
                        >
                        <div className="modal__header">
                            <p>Create New Task</p>
                        </div>
                        <div className="modal__body">
                            <form >
                                <div className="modal__input">
                                    <input type="text" onChange = {this.handleInput} />
                                </div>
                                <div className="modal__btn">
                                    <button className="btn btn--blue btn--modal" onClick={ () =>
                                        {
                                            this.closeModal();
                                            this.addTodo();
                                            this.props.addDone();
                                        }
                                        }
                                    >Save</button>
                                    <button className="btn btn--blueLight btn--modal" onClick={this.closeModal}>Cancel</button>
                                </div> 
                            </form>
                        </div>
                        </Modal>
                    </div>
                </div>
                <div className="todoField">
                    {list}
                </div>
            </div>
            
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addDone: () => dispatch(addDone()),
        delDone: () => dispatch(delDone())
        }
}
const mapStateToProps = state => {
    return {
        doneCount: state.doneCount,
        doneList:state.doneList
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(DoneBox);