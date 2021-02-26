//Component for create task

import { useDispatch } from "react-redux";
import { CreateList } from "../../../modules/ToDoRequestes/ToDoAction";
import React from "react";
import { ErrMessage } from "../../../components/ErrMessage";
import { TittleComponent } from "../../../components/Tittle";
import { colorsList } from "../../../configs/constants";

export const AddTodo = ({ }) => {
  const [ Tittle, setTittle ] = React.useState(null);
  const [ Description, setDescription ] = React.useState(null);
  const [ Color, colorDescription ] = React.useState(null);
  const [ Error, SetError ] = React.useState(false)
  const [ itemId, setItemId ] = React.useState('')
  const dispatch = useDispatch( )


  const CreateToDo = () => {
    let color = Color ? Color : 'red'
    let payload = { Tittle, Description, color }
    if ( Tittle && Description ) {
      dispatch( CreateList( payload ) )
      setTittle('')
      setDescription('')
      colorDescription('')
      setItemId('')
    } else {
      SetError(true )
    }
  }

  const handleChangeTittle = ev => {
    setTittle( ev.target.value )
    SetError(false )
  }

  const handleChangeDescription = ev => {
    setDescription( ev.target.value )
    SetError(false )
  }

  const handleCheckColor = ( i, item ) => {
    setItemId( item )
    colorDescription( i )
  }

  return (
    <div className={ 'AddTodoTask' }>
      <TittleComponent text={ 'Create List' } />

      <input
        onChange={ handleChangeTittle }
        placeholder={ 'Tittle' }
        className={ 'TittleInput' }
        value={ Tittle }
      />
      <textarea
        className={ 'TextArea' }
        onChange={ handleChangeDescription }
        name='description'
        placeholder={ 'Description' }
        value={ Description }
      />

      <div className={ 'ColorsSircleDiv' } >
        { colorsList.map(( i, item) => (
          <div
              onClick={ () => handleCheckColor( i.color, item ) }
              className={ 'ColorsSircle' }
              style={{ background: i.color,
                border: `2px solid ${itemId === item ? i.color : 'black' }`
              }}
            />
          )
        )}
      </div>


      { Error === true &&
      <ErrMessage/>
      }
      <button className={ 'CreateTask' } onClick={ CreateToDo }> + </button>
    </div>
  )
}