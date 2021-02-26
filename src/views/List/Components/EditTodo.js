//Component for delete task

import React, { useEffect } from "react";
import { EditTodoList } from "../../../modules/ToDoRequestes/ToDoAction";
import { useDispatch } from "react-redux";
import { colorsList } from "../../../configs/constants";
import { CloseButton } from "../../../components/CloseButton";
import { ErrMessage } from "../../../components/ErrMessage";

export const EditTodo = ({ CloseSection, EditInfo }) => {
  const [ title, setTittle ] = React.useState(null);
  const [ description, setDescription ] = React.useState(null);
  const [ color, setColor ] = React.useState('blue');
  const [ Error, SetError ] = React.useState(false);
  const [ itemId, setItemId ] = React.useState('');
  let dispatch = useDispatch()
  let id = EditInfo._id

  useEffect(( ) => {
    setTittle( EditInfo.title )
    setDescription( EditInfo.description )
    setColor( EditInfo.color )

  }, [ EditInfo ] )

  const handleChangeTittle = ( ev ) => {
    setTittle( ev.target.value )
    SetError(false )
  }

  const handleChangeDescription = ( ev ) => {
    setDescription( ev.target.value )
    SetError(false )
  }

  const EditTodo = ( ) => {
    let payload = { id, title, description, color }

    if ( title && description ) {
      dispatch( EditTodoList( payload ) )
      CloseSection( )
    } else {
      SetError(true )
    }
  }

  const handleCheckColor = ( i, item ) => {
    setItemId( item )
    setColor( i )
  }

  return (
    <div className={ 'BackDrop' }>
      <div className={ 'EditTodoStyle' }>
        <CloseButton handleClick={ CloseSection }/>

        <div>
          <input
            onChange={ handleChangeTittle }
            placeholder={ 'Tittle' }
            className={ 'TittleInput' }
            value={ title }
          />

          <textarea
            onChange={ handleChangeDescription }
            name='description'
            className={ 'TextArea' }
            placeholder={ 'Description' }
            value={ description }
          />

          <div className={ 'ColorsSircleDiv' }>
            { colorsList.map(( i, item ) => (
                <div
                  onClick={ () => handleCheckColor( i.color, item ) }
                  className={ 'ColorsSircle' }
                  style={{
                    background: i.color,
                    border: `2px solid ${ itemId === item ? i.color : 'black' }`
                  }}
                />
              )
            )}
          </div>

          <div className={ 'SaveAndCloseDiv' }>
            { Error === true &&
            <ErrMessage/>
            }
            <button onClick={ EditTodo } className={ 'SaveButton' }> Save </button>
          </div>

        </div>
      </div>
    </div>
  )
}