import React, { Component } from 'react';
import ButtonAdd from './ButtonAdd';
import ListPhone from './ListPhone';



export default class BoxPhone extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.addData = this.addData.bind(this)
        this.editData = this.editData.bind(this)
        this.removeData = this.removeData.bind(this)
        this.resendData = this.resendData.bind(this)
    }

    //lifesycle
    componentDidMount() {
        request.get('phonebooks')
            .then(function (response) {
                const data = response.data.map(item => {
                    item.sent = true;
                    return item
                })
                this.setState({ data: data })
            }.bind(this))
            .catch(function (error) {
                console.log(error)
            })

    }

    addData(name, phone) {
        const id = Date.now();
        this.setState(function (state, props) {
            return {
                data: [...state.data, { id, name, phone, sent: true }]
            }
        })
        request.post('phonebooks', { id, name, phone })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                this.setState(function (state, props) {
                    return {
                        data: state.data.map(item => {
                            if (item.id === id) {
                                item.sent = false
                            }
                            return item
                        })
                    }
                })
            }.bind(this))
    }


    editData(id, name, phone) {
        request.put(`phonebooks/${id}`, { name, phone })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                this.setState(function (state, props) {
                    return {
                        data: state.data.map(item => {
                            if (item.id === id) {
                                item.sent = false
                            }
                            return item
                        })
                    }
                })
            }.bind(this))
    }


    removeData(id) {
        this.setState(function (state, props) {
            return {
                data: state.data.filter(item => item.id !== id)
            }
        })
        request.delete(`phonebooks/${id}`).then(function (response) { console.log(response) }).catch(function (error) { console.log(error) }.bind(this))
    }


    resendData(id, name, phone) {
        request.post('phonebooks', { id, name, phone }).then(function (response) { console.log(response) }).catch(function (error) {
            this.setState(function (state, props) {
                return {
                    data: state.data.map(item => {
                        if (item.id === id) {
                            item.sent = true
                        }
                        return item
                    })
                }
            })
        }.bind(this))
    }



    render() {
        return (
            <div className="container ">
                <h1 className="card text-center alert alert-dark">Phone Book Apps</h1>
                <ButtonAdd addData={this.addData} />
                <ListPhone data={this.state.data} removeData={this.removeData} resendData={this.resendData} editData={this.editData} />

            </div>
        )
    }
}
