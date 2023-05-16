import PropTypes from 'prop-types'

const ToDoItem = ({ todo, handleDelete }) => {
  return (
    <li>
      {todo}
      <button
        className='delete-button'
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </li>
  )
}

ToDoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default ToDoItem
