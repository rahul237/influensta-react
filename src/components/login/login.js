import React,{Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import axios from '../../axios';

class LoginForm extends Component{ 

  submitHandler = () => {
    const data={
      email:"tech@brand.com",
      password:"123456"
    };
    axios.post('/login/api/brand',data)
    .then(response =>console.log(response))
    .catch(error=>console.error(error));
    console.log("form submitted");

  }
  
  render(){
  return(<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large' onClick={this.submitHandler}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
  )}

}



export default LoginForm