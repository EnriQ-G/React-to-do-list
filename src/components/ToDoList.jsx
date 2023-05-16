import React, { useState } from 'react'
import ToDoItem from './ToDoItem'

export const ToDoList = () => {
  // 1: Los estados de react sirven para guardar información que se va a utilizar en el componente
  // 2: Los estados se declaran con la función useState
  // 3: Los estados se declaran en el componente padre y se pasan al componente hijo como props
  const [inputValue, setInputValue] = useState('')

  // añadimos otro estado par aalmacenar las tareas
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (inputValue.trim()) { // trim() elimina los espacios en blanco al inicio y al final de un string
      setTodos([...todos, inputValue])
      setInputValue('') // limpiamos el input
    }
  }

  const deleteItem = (index) => {
    // filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
    setTodos(todos.filter((elemento, i) => i !== index))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* una forma comun de trabajar con un input es usar el evento onChange para guardar la información
      en el estado apenas sea tecleado */}
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      {/* Otra forma de trabajar es crear la función fuera del return */}
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {/* map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos */}
        {todos.map((item, index) => (
          <ToDoItem
            todo={item}
            handleDelete={() => deleteItem(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  )
}
