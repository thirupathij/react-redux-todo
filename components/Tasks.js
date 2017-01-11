import React from 'react';

var Tasks = function(props){
  var tasks = props.todos;

  if (props.filter === 'Completed'){
    tasks = props.todos.filter((eachTask) => {
      return eachTask.completed === true;
    });
  } else if (props.filter === 'Todo') {
    tasks = props.todos.filter((eachTask) => {
      return eachTask.completed === false;
    });
  }

  tasks = tasks.map((eachTask) => 
    <li key={eachTask.id} 
        onClick={() => props.onToggleTask(eachTask.id)}
        style={{
        textDecoration: eachTask.completed ? 'line-through' : 'none'
        }}>
      {eachTask.text}
    </li>
  );

  return (
    <ul>
      {tasks}
    </ul>
  );
};

export default Tasks;