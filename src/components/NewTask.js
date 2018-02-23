import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createTask } from '../actions';

class NewTask extends Component {

    renderField(field){
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
                    <Field 
                        label="Title"
                        className="inputBox"
                        name = 'title'
                        component = {this.renderField}
                    />
                    <Field 
                        label="Categories"
                        className="inputBox"
                        name = 'categories'
                        component = {this.renderField}
                    />
                    <Field 
                        label="Content"
                        className="inputBox"
                        name = 'content'
                        component = {this.renderField}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>
                </form>           
        )
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.title) errors.title = "Please provide a title for the task";
    if (!values.categories) errors.categories = "Please enter at least one category";
    if (!values.content) errors.content = "Please enter some content";
    return errors;
}

export default reduxForm({
    validate,
    form: 'newTaskForm'
})(
    connect(null, { createTask })(NewTask)
);