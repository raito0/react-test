import React, {Component} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
const api_url = 'http://localhost:4000/';

class Read extends Component{
    constructor(props) {
        super(props);
        this.state={
            persons: [],
            isLoading: true,
            update: false,
            name:'',
            address:''
        };
        this.remove= this.remove.bind(this);
        this.setUpdate=this.setUpdate.bind(this);
        this.updated= this.updated.bind(this);
        this.upload=this.upload.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
      }
    componentDidMount(){
        this.getPerson();
    }
    getPerson() {
        axios.get(api_url)
        .then(res=>res)
        .then(res=>
        this.setState({
            persons: res,
            isLoading: false
        }))
        .catch(err=>this.setState({err}));
    }
    remove(uid){
        axios.post(`http://localhost:4000/delete?id=${uid}`);    
    }
    
    setUpdate() {
        this.setState({
            update: true,
        })
       
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
    updated(){
        const abc = !this.state.isLoading && this.state.persons.data.data;
        if (!this.state.update){
            return(
                <tbody>
                    {abc && abc.map((home) => 
                    
                    <tr>
                        <th>{home.ID}</th>
                        <td>{home.name}</td>
                        <td>{home.address}</td>
                        <td>
                            <button onClick={() =>
                                this.remove(home.ID)}>delete</button>
                            <button onClick={this.setUpdate}>update</button>
                        </td>
                    </tr>)}
                </tbody>
            );
        } else{
            return(
                <tbody>
                    {abc && abc.map((home) => 
                    
                    <tr>
                        <th>{home.ID}</th>
                        <td><input type="text" placeholder={home.name} value={this.state.name} onChange={this.onChangeName} /></td>
                        <td><input type="text" placeholder={home.address} value={this.state.address} onChange={this.onChangeAddress}/></td>
                        <td>
                            <button onClick={()=>
                                this.upload(home.ID, home.name, home.address)}>ok</button>
                        </td>
                    </tr>)}
                </tbody>
            );
        }
    }
    upload(uid, name, address){
        axios.post(`http://localhost:4000/update?id=${uid}&name=${this.state.name}&address=${this.state.address}`)
    }
    render() {
        return (
            <div className="Read">
                <div style={{marginTop: 10}}>
                    <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col-sm">#</th>
                        <th scope="col-sm">Name</th>
                        <th scope="col-sm">Address</th>
                        <th></th>
                        </tr>
                    </thead>
                        {this.updated()}
                    </table>
                </div>
            </div>
        );
    }
}
export default Read;