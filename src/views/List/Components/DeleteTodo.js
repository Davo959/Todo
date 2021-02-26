//Component for delete task

import React from "react";
import {DeleteTodoItem, PendingFunction} from "../../../modules/ToDoRequestes/ToDoAction";
import { useDispatch } from "react-redux";
import { CloseButton } from "../../../components/CloseButton";

export const DeleteTodo = ({ CloseDeleteSection, item }) => {

  const dispatch = useDispatch()

  const DeleteList = () => {
    dispatch( PendingFunction( true ) )

    if ( item.length > 1 ) {
      item.map(( i ) => (
        dispatch( DeleteTodoItem( i._id ) )
      ))
      CloseDeleteSection()

    } else {
      dispatch( DeleteTodoItem( item._id ) )
      CloseDeleteSection()
    }
  }

  let AllList = item.length > 1

  return (
    <div className={ 'BackDrop' }>
      <div className={ 'DeleteTodoStyle' }>
        <CloseButton handleClick={ CloseDeleteSection }/>

        <p className={ 'AreYouSure' }>{`
          Are you sure you want delete ${ AllList === true ? 'All' : '' } List`
        }</p>

        <div>
          <button onClick={ DeleteList } className={ 'CloseButton' }> Delete </button>
        </div>

      </div>
    </div>
  )
}