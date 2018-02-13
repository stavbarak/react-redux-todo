import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTasks } from '../actions';


class TasksIndex extends Component {
    componentDidMount() {
        this.props.fetchTasks();
    }
    renderTasks(){
        return _.map(this.props.tasks, task => {
            return (
                <li className="list-group-item" key={task.id}>
                    {task.text}
                </li>   
            );           
        });
    }
    render () {
        return (          
                <div>
                    <div className="tasksContainer">
                        <div><h3 className="appTitle">Tasks</h3></div>
                        <div>
                            <Link className="btn btn-primary" to="/tasks/new">
                                New Task
                            </Link>
                        </div>
                    </div>
                    <ul className="list-group">
                        {this.renderTasks()}
                    </ul>
                </div>
            
        );
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});


export default connect(mapStateToProps, { fetchTasks })(TasksIndex);