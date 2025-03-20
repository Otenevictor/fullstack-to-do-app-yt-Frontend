import axios from 'axios'

const baseUrl = 'http://localhost:5000'
const getAllTodo = (setTodo) => {
  axios
    .get(baseUrl)
    .then((response) => {
      console.log('data --->', response.data);
      setTodo(response.data); // Ensure it's setting the correct data
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

const addTodo = ( text, setText, setToDo) => {
axios
    .post(`${baseUrl}/save`, { text })
    .then((response) => {
      console.log('data --->', response.data);
      setText('');
      getAllTodo(setToDo);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

const updateTodo = ( toDoId, text, setText, setToDo, setIsUpdating) => {
  axios
      .post(`${baseUrl}/update`, {_id: toDoId, text })
      .then((response) => {
        console.log('data --->', response.data);
        setText('');
        setIsUpdating(false);
        getAllTodo(setToDo);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
  const deleteTodo = (_id, setToDo ) => {
    axios
        .post(`${baseUrl}/delete`, {_id })
        .then((response) => {
          console.log('data --->', response.data);
          getAllTodo(setToDo);
          
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }

export {getAllTodo, addTodo, updateTodo, deleteTodo} ;