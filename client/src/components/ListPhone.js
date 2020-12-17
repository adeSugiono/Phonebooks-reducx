import React, { Component } from 'react';
import TablePhone from './TablePhone';


export default class ListPhone extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '' }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this)
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }
    handleChangePhone(event) {
        this.setState({ phone: event.target.value })
    }

    Search() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br></br>
                <h3 className="alert alert-dark">Search Form</h3>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.name} placeholder="name" onChange={this.handleChangeName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" value={this.state.phone} placeholder="phone" onChange={this.handleChangePhone} />
                    </div>
                </div>
            </form >
        )
    }

    render() {
        let { data, removeData, resendData, editData } = this.props;
        if (this.state.name && this.state.phone) {
            const filterItems = (name, phone) => {
                return data.filter(item => {
                    return (
                        item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 &&
                        item.phone.indexOf(phone) > -1
                    );
                });
            };
            data = filterItems(this.state.name, this.state.phone);
        }
        if (this.state.name) {
            const filterItems = name => {
                return data.filter(item => {
                    return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
                });
            };
            data = filterItems(this.state.name);
        }
        if  (this.state.phone) {
            const filterItems = phone => {
                return data.filter(item => {
                    return item.phone.indexOf(phone) > -1;
                });
            };
            data = filterItems(this.state.phone);
        }
        
        const listNode = data.map((item, index) => < TablePhone index={index + 1} key={item.id} id={item.id} name={item.name} phone={item.phone}
         sent={item.sent} removeData={() => { removeData(item.id) }} resendData={() => { resendData(item.id, item.name, item.phone)}} editData={() => { editData(item.id, item.name, item.phone)  }} />)
        return (
            <div >
                <div>
                    {this.Search()}
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {listNode}
                    </tbody>
                </table>
            </div>
        )
    }
}
