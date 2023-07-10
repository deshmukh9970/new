import React, { Component, Fragment } from 'react';
import Child from './Child';
import EditableRow from './EditableRow';
import './table.css'
class FetchData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      new: {},
      id: null
    }
  }
  componentDidMount() {
    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then(
        respons => { return respons.json() }
      ).then(data => {
        this.setState({
          result: [...data]
        })
      }).catch(err => { console.log(err) })
  }
  addItem = event => {
    let newRecord = {
      firstName: event.target.first_name.value,
      lastName: event.target.last_name.value,
      email: event.target.mail.value,
      contactNumber: event.target.contact.value,
      age: event.target.age.value
    }
    this.setState({
      result: [...this.state.result, newRecord]
    })
    event.preventDefault();
  }
  deleteItem = (mail) => {
    this.setState({
      result: this.state.result.filter(emailemail => emailemail.email !== mail)
    })
  }
  editItem = (obj) => {
    console.log(obj)
    let newObj = {
      id: obj.email,
      firstName: obj.firstName,
      lastName: obj.lastName,
      email: obj.email,
      contactNumber: obj.contactNumber,
      age: obj.age
    }
    this.setState({
      id: obj.email,
      new: newObj
    })
  }
  cancelEditItem = () => {
    this.setState({
      id: null
    })
  }
  changeHandlerFname = event => {
    this.setState({
      new: { ...this.state.new, firstName: event.target.value }
    })
  }
  changeHandlerLname = event => {
    this.setState({
      new: { ...this.state.new, lastName: event.target.value }
    })
  }
  changeHandlerEmail = event => {
    this.setState({
      new: { ...this.state.new, email: event.target.value }
    })
  }
  changeHandlerContactNumber = event => {
    this.setState({
      new: { ...this.state.new, contactNumber: event.target.value }
    })
  }
  changeHandlerAge = event => {
    this.setState({
      new: { ...this.state.new, age: event.target.value }
    })
  }
  saveItem = (obj) => {

      let ind = this.state.result.indexOf(this.state.result.find(element=>element.email===this.state.id))    
    this.state.result[ind].firstName = this.state.new.firstName;
    this.state.result[ind].lastName = this.state.new.lastName;
    this.state.result[ind].email = this.state.new.email;
    this.state.result[ind].contactNumber = this.state.new.contactNumber;
    this.state.result[ind].age = this.state.new.age;
    this.setState({
      result: [...this.state.result],
      id: null
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addItem} >
          <input type='text' name="first_name" id="fname" placeholder='First Name' required />
          <input type='text' name="last_name" placeholder='Last name' />
          <input type='email' name="mail" placeholder='Email' />
          <input type='number' name="contact" placeholder='Contact No' />
          <input type='number' name="age" placeholder='Age' />
          <button className='button-10' type='submit' >Add Item</button>
        </form>
        <br /><br />
        <table>
          <tbody>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact no</th>
              <th>age</th>
              <th>Action</th>
            </tr>
            {
              this.state.result.map(element =>
                <Fragment>
                  {this.state.id !== element.email ? <Child element={element} editItem={() => this.editItem(element)} deleteItem={this.deleteItem} />
                    : <EditableRow obj={element} newObj={this.state.new} saveItem={this.saveItem} changeHandlerFname={this.changeHandlerFname} changeHandlerLname={this.changeHandlerLname} changeHandlerEmail={this.changeHandlerEmail} changeHandlerContactNumber={this.changeHandlerContactNumber} editItem={this.editItem} changeHandlerAge={this.changeHandlerAge} deleteItem={this.deleteItem} cancelEditItem={this.cancelEditItem} firstName={this.state.firstName} />
                  }
                </Fragment>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default FetchData