import React, { Component } from 'react'

class EditableRow extends Component {
    render() {
        return (
            <tr><td> <input type='text' onChange={this.props.changeHandlerFname} name="first_name" value={this.props.newObj.firstName} id="fname" placeholder='First Name' /></td>
            <td><input type='text' onChange={this.props.changeHandlerLname} name="last_name" value={this.props.newObj.lastName}   placeholder='Last name' /></td>
            <td><input type='email' onChange={this.props.changeHandlerEmail} name="mail" value={this.props.newObj.email}  placeholder='Email' /></td>
            <td>  <input type='number' onChange={this.props.changeHandlerContactNumber} name="contact" value={this.props.newObj.contactNumber}  laceholder='Contact No' /></td>
            <td><input type='number' onChange={this.props.changeHandlerAge} name="age" value={this.props.newObj.age}  placeholder='Age' /></td>
            <td> <button onClick={()=>this.props.saveItem(this.props.obj)}>Save</button>  <button onClick={() => this.props.cancelEditItem()}>Cancel</button></td>
            </tr>
        )
    }
}
export default EditableRow