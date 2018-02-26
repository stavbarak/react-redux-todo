import _ from 'lodash';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../actions';

const FIELDS = {
    title: {
        type: 'input',
        label: 'Title',
        name : 'title'
    },   
    categories: {
        type: 'input',
        label: 'Categories',
        name : 'categories'
    },
    content: {
        type: 'textarea',
        label: 'Content',
        name : 'content'
    }

}

class NewTask extends Component {

    renderField = (fieldConfig) => {

        return (
            <Field 
                key={fieldConfig.name}
                label={fieldConfig.label}
                className="inputBox"
                name = {fieldConfig.name}
                component = {this.fillField}
            />
        )    
    }

    fillField = (field) => {
        const {meta: {touched, error} } = field;
        const className =`${touched && error ? 'has-danger' : ''}`
        return (
            <FormGroup className={className}>
                <label>{field.label}</label>
                <FormControl                   
                    className="taskInput"
                    type="text" 
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </FormGroup>
        )
    }

    onSubmit = (values) => {       
        this.props.createTask(values, () => {
            this.props.history.push('/');
        });
    }


    render(){
        const {handleSubmit} = this.props;
        return (           
                <form onSubmit={handleSubmit(this.onSubmit)} className="newTaskForm col-xs-6">
                    <div><h3 className="newTaskTitle">Add New Task</h3></div>
                    {_.map(FIELDS, this.renderField)}

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>           
        )
    }
}

const validate = (values) => {
    const errors = {};
    _.each(FIELDS, (type, field) => {
        if(!values[field]){
            errors[field] = `Please enter the ${field}`;
        }
    });
    return errors;
}

export default reduxForm({
    validate,
    Fields: _.keys(FIELDS),
    form: 'newTaskForm'
})(
    connect(null, { createTask })(NewTask)
);