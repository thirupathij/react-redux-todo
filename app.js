import React from 'react';
import { connect } from 'react-redux';
import Tasks from './components/tasks.js';
import Filter from './components/Filter.js';
import AddTask from './components/AddTask.js';
import { addTodo, toggleTodo, filterTodo } from './actions'

var App = React.createClass({

  addTask : function(inputValue) {
    this.props.dispatch(addTodo(inputValue));    
  },

  toggleTask : function(id) {
    this.props.dispatch(toggleTodo(id));
  },

  filterClick : function(filter) {
    this.props.dispatch(filterTodo(filter));
  },

  render: function() {
    return (
      <div className="main">
        <h3>Todo List</h3>
        <AddTask onAddTask={this.addTask}/>
        <Tasks todos={this.props.todos} filter={this.props.filter} 
            onToggleTask={this.toggleTask}/>
        <Filter onFilterClick={this.filterClick}/>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    todos : state.todos,
    filter : state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);