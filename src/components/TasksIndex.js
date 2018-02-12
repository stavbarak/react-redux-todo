import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                <h3>Tasks</h3>
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