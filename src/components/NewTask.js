import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl } from 'react-bootstrap';

class NewTask extends Component {

    renderField(field){
        return (
            <FormGroup>
                <label>{field.label}</label>
                <FormControl                   
                    className="taskInput"
                    type="text" 
                    {...field.input}
                />
            </FormGroup>
        )    
    }


    render(){
        return (           
                <form>
                    <Field 
                        label="Title"
                        className="inputBox"
                        name = 'title'
                        component = {this.renderField}
                    />
                    <Field 
                        label="Tags"
                        className="inputBox"
                        name = 'tags'
                        component = {this.renderField}
                    />
                    <Field 
                        label="Content"
                        className="inputBox"
                        name = 'content'
                        component = {this.renderField}
                    />
                </form>           
        )
    }
}

export default reduxForm({
    form: 'newTaskForm'
})(NewTask);