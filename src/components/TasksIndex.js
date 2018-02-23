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
                    <Link to={`tasks/${task.id}`}>
                        {task.title}
                    </Link>
                </li>   
            );           
        });
    }
    render () {
        return (          
                <div className="tasksContainer col-xs-6">
                    <div className="headerContainer">
                        <div><h3 className="appTitle">Tasks</h3></div>
                        <div>
                            <Link className="btn btn-success" to="/tasks/new">
                                New Task
                            </Link>
                        </div>
                    </div>
                    <ul className="list-group tasksList">
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