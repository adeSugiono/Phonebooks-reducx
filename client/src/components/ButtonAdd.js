import React, { Component } from 'react';

class ButtonAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', isButton: false };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddButton = this.handleAddButton.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value })
    }
    handleChangePhone(event) {
        this.setState({ phone: event.target.value })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addData(this.state.name, this.state.phone);
        this.setState({ name: '', phone: '' })
    }
    handleAddButton(event) {
        event.preventDefault();
        this.setState({ isButton: true })
    }
    handleCancel(event) {
        event.preventDefault();
        this.setState({ isButton: false })
    }



    Form() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3 className="alert alert-dark">Adding Form</h3>
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
                <div className="form-group row">
                    <input className="btn btn-success" type="submit" value="Save"  onClick={this.handleSubmit} />
                    <input className="btn btn-warning" type="submit" value="Cancel" onClick={this.handleCancel} />
                </div>
            </form >
        )
    }
    Add() {
        return (
            <div >
            <button className="btn btn-primary" href='/' onClick={this.handleAddButton} type="button" >
                + add
            </button><br></br>
            </div>
        )
    }

    render() {
     if(this.state.isButton){
         return this.Form();
     }
     else {
         return this.Add();
     }
    }
}

export default ButtonAdd
