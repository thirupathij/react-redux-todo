import React from 'react';

var AddTask = function(props) {
  let input;

  return  (<form className='add-task' onSubmit={(e) => {
        e.preventDefault();
        if (!input.value) {
          return;
        }
        props.onAddTask(input.value);
        input.value = '';
      }}>
    <input ref={node => {
          input = node
        }} type="text" placeholder="Add todo"/>
    <input type="submit" value="Add"/>
  </form>);
}

export default AddTask;