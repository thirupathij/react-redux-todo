import React from 'react';

var Filter = function(props) {
  return <div className="filter">
    <span onClick={() => {props.onFilterClick('All')}}>All</span>
    <span onClick={() => {props.onFilterClick('Completed')}}>Completed</span>
    <span onClick={() => {props.onFilterClick('Todo')}}>Todo</span>
  </div>;
}

export default Filter;