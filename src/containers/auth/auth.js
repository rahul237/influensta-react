import React, {Component} from  'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import './auth.css';


class Auth extends Component{
    state= {
        controls:{
            email:{
                elementtype:'input',
                celementConfig:{
                    type:'email',
                    placeholder:'Your Email'

                },
                value:'',
                validation:{
                    required:true,
                    isEmail:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementtype:'input',
                celementConfig:{
                    type:'password',
                    placeholder:'Password'

                },
                value:'',
                validation:{
                    required:true,
                    minLength:6
                },
                valid:false,
                touched:false
            }
        }
    }

    checkValidity ( value, rules ) {
        let isValid = true;
        if ( !rules ) {
            return true;
        }

        if ( rules.required ) {
            isValid = value.trim() !== '' && isValid;
        }

        if ( rules.minLength ) {
            isValid = value.length >= rules.minLength && isValid
        }

        if ( rules.maxLength ) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if ( rules.isEmail ) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test( value ) && isValid
        }

        if ( rules.isNumeric ) {
            const pattern = /^\d+$/;
            isValid = pattern.test( value ) && isValid
        }

        return isValid;
    }

    inputChangedHandler = ( event, controlName ) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity( event.target.value, this.state.controls[controlName].validation ),
                touched: true
            }
        };
        this.setState( { controls: updatedControls } );
    }
     
    render(){
        const formelementsArray = [];
        for (let key in this.state.controls){
            formelementsArray.push({
                id:key,
                config:this.state.controls[key]
            });
        }

        const form = formelementsArray.map(formElement =>(
            <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={( event ) => this.inputChangedHandler( event, formElement.id )} />

        ));



        return(
            <div className="Auth">
                <form>
                    {form}
                    <Button btnType="Success">Submit</Button>
                </form>
            </div>
        );
    }
}

export default Auth;