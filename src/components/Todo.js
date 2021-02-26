// Component for elements

import Edit from '../assets/images/edit.png'
import Delete from '../assets/images/delete.png'


export const Todo = ({ ClickEdit, ClickDelete, tittle, description, color, key }) => {
  return (
    <div key={ key }
         style={{ border: `2px solid ${ color }` }}
         className={ 'TodoListContainer' }
    >
      <div className={ 'CirclesContainer' } >

        <div className={ 'Circles' } >
          <div style={{ background: color }} />
          <div style={{ background: color }} />
          <div style={{ background: color }} />
        </div>

        <div className={ 'IconsSection' }>
          <button onClick={ ClickEdit } title={ 'Edit' } >
            <img
              src={ Edit }
              alt={ 'edit' }
            />
          </button>

          <button onClick={ ClickDelete } title={ 'Delete' }>
            <img
              src={ Delete }
              alt={ 'delete' }
            />
          </button>
        </div>

      </div>

      <div className={ 'TittleStyle' }>

        <p>{ tittle }</p>
        <div className={ 'DescriptionStyle' }>
          <span>{ description }</span>
        </div>

      </div>
    </div>
  )
}