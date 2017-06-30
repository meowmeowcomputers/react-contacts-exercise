import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'

import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

// import './inputform.css'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var contactList = [];

class InputForm extends Component {

  constructor(props) {
    super(props);
    this.state = {fname: '', lname: '', email:'', phoneNumber:'', address:'', city:'', state:'', zip:'' }
  }

  update_state (event, key) {
    this.setState({[key]: event.target.value});
  }


  handleSubmit (event) {
    console.log('submitted: ', this.state)
    event.preventDefault();
    contactList.push(this.state);
    console.log('second contactList: ', contactList[1])
  }

  render () {
    return(
      <div>
      <AppBar title = "Add a Contact" />
      <form onSubmit={event => this.handleSubmit(event)}>
        <Card className="md-card">
        <CardTitle title="Contact Form"/>
        <CardText>
        <label>First Name: </label>
          <input type="text" value={this.state.fname} onChange={event => this.update_state(event, 'fname')}/>
          <br/><br/>
        <label>Last Name: </label>
          <input type="text" value={this.state.lname} onChange={event => this.update_state(event, 'lname')}/>
          <br/><br/>
        <label>Email Address: </label>
          <input type="text" value={this.state.email} onChange={event => this.update_state(event, 'email')}/>
          <br/><br/>
        <label>Street Address: </label>
          <input type="text" value={this.state.address} onChange={event => this.update_state(event, 'address')}/>
          <br/><br/>
        <label>City: </label>
          <input type="text" value={this.state.city} onChange={event => this.update_state(event, 'city')}/>
          <br/><br/>
        <label>State: </label>
          <input type="text" value={this.state.state} onChange={event => this.update_state(event, 'state')}/>
          <br/><br/>
        <label>Zipcode: </label>
          <input type="text" value={this.state.zip} onChange={event => this.update_state(event, 'zip')}/>
          <br/><br/>
        </CardText>
        <CardActions>
        <RaisedButton label="Submit" type="submit" primary={true}/>
      </CardActions>
      </Card>
    </form>
    </div>
    )
  }
}

export default InputForm
