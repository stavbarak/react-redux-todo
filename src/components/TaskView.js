import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTask, deleteTask } from '../actions';
import { Link } from 'react-router-dom';


class TaskView extends Component {
    componentDidMount() {
        if(!this.props.task){
            const {id} = this.props.match.params;
            this.props.fetchTask(id);
        }        
    }

    onDelete = () => {
        const {id} = this.props.match.params;
        this.props.deleteTask(id, () => {
            this.props.history.push('/');
        });
    }

    render () {
        const { task } = this.props;
        if (!task) {
            return <div>Loading...</div>;
        }
        return (          
                <div className="taskView col-xs-6">
                    <Link to="/" className="btn btn-primary taskViewElement" > &laquo; Back to tasks</Link>
                    <button 
                         className="btn btn-danger pull-xs-right"
                         onClick={this.onDelete}
                    >
                        Delete task
                    </button>
                    <h3 className="taskViewTitle taskViewElement">{task.title}</h3>
                    <h6 className="taskViewCat taskViewElement">Categories: {task.categories}</h6>
                    <p className="taskViewElement">{task.content}</p>
                </div>
            
        );
    }
}

const mapStateToProps = ({tasks}, ownProps) => ({
   task: tasks[ownProps.match.params.id]
});


export default connect(mapStateToProps, {fetchTask, deleteTask})(TaskView);