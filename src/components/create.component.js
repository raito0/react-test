import React, {Component} from 'react';
import {addRequest, addSuccess} from '../actions/todo.action';
import axios from 'axios';
import { connect } from 'react-redux';
import { reducer_add, reducer_fetch} from '../reducers/todo.reducer';
export class Create extends Component{
    constructor(props) {
        super(props);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state= {
            name:'',
            DOB:'',
            address:'',
        }
    }
    componentDidMount(){
        this.props.getData();
    }
    onChangeName(t) {
        this.setState({
            name: t.target.value
        });
    }
    onChangeAddress(t) {
        this.setState({
            address: t.target.value
        });
    }
    onSubmit(t){
        t.preventDefault();
          
        this.setState({
            name: this.state.name,
            address: this.state.address,
        });
        // axios.post(`http://localhost:4000/create?name=${this.state.name}&address=${this.state.address}`, obj)
        // .then(res => console.log(res.data));
        const obj = {
            name: this.state.name,
            address: this.state.address
        };
        axios.post('http://localhost:4000/create', obj).then(res=>res)
        .catch(error => console.log(error));
        
        this.props.getData();
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add new person</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Name:</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName}/>
                    </div>
                    <div className="form-group">
                        <label>Add address:</label>
                        <input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add"  className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = dispatch => {
    return {
        requestData: () => dispatch(addRequest),
        getData: () => dispatch(addSuccess),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Create);