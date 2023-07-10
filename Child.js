import React, { Component } from 'react'

class Child extends Component {
    render() {
        
        return (
            <tr><td>{this.props.element.firstName}</td>
            <td>{this.props.element.lastName}</td>
            <td>{this.props.element.email}</td>
            <td>{this.props.element.contactNumber}</td>
            <td>{this.props.element.age}</td>
            <td> <button onClick={() => this.props.editItem(this.props.element)}>Edit</button>  <button onClick={() => this.props.deleteItem(this.props.element.email)}>Delete</button></td>
            </tr>
            
        )
    }
}
export default Child