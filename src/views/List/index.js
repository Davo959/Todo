//all components are connected here

import { Todo } from "../../components/Todo";
import { AddTodo } from "./Components/AddTodo";
import React, { useEffect } from "react";
import { ListContainer } from "../../components/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import {GetList, PendingFunction} from "../../modules/ToDoRequestes/ToDoAction";
import { Search } from "./Components/Search";
import { TittleComponent } from "../../components/Tittle";
import {ReactLoader} from "../../components/ReactLoader";

export const List = ( ) => {
  const [ Edit, SetEdit ] = React.useState('')
  const [ Id, SetId ] = React.useState('')
  const dispatch = useDispatch();

  const List = useSelector(state => state.ToDoReducer.ToDoList,);
  const Check = useSelector(state => state.ToDoReducer.CheckPending,);

  useEffect(() => (
    dispatch( GetList() ),
    dispatch(PendingFunction (true))
  ), [ ] )

  const OpenEditSection = item => SetEdit(item)

  const OpenDeleteSection = item => SetId(item)

  const CloseEditSection = () => SetEdit('')

  const CloseDeleteSection = () => SetId('')

  return (
    <ListContainer
      CloseEditSection={ CloseEditSection }
      CloseDeleteSection={ CloseDeleteSection }
      Edit={ Edit }
      id={ Id }
    >
      <div className={ 'Wrapper' }>
        <AddTodo/>
        { List.length ?
          <>
            <TittleComponent text={ 'List' }/>
            <Search/>
          </>
          : ''
        }
        {Check === true ?
            (
            <ReactLoader/>
            )
          :
          (
            List.length ? List.map(( i, item ) => (
         <div  key={ item } >
           <Todo
             tittle={ i.title }
             description={ i.description }
             color={ i.color }
             ClickEdit={ () => OpenEditSection( i ) }
             ClickDelete={ () => OpenDeleteSection( i ) }
           />
         </div>
        )) : ''
          )
        }
        { List.length && List.length > 1 ?
          <button
            onClick={ () => OpenDeleteSection(List.length && List ) }
            className={ 'RemoveAllButton' }> Delete All </button>
          : ''
        }
      </div>
    </ListContainer>
  )
}