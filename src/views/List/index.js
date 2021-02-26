//all components are connected here

import { Todo } from "../../components/Todo";
import { AddTodo } from "./Components/AddTodo";
import React, { useEffect } from "react";
import { ListContainer } from "../../components/ListContainer";
import { useDispatch, useSelector } from "react-redux";
import { GetList } from "../../modules/ToDoRequestes/ToDoAction";
import { Search } from "./Components/Search";
import { TittleComponent } from "../../components/Tittle";

export const List = ({ }) => {
  const [ Edit, SetEdit ] = React.useState('')
  const [ Id, SetId ] = React.useState('')
  const dispatch = useDispatch();

  const List = useSelector(state =>
    state.ToDoReducer.ToDoList,
  );

  useEffect(() => (
    dispatch( GetList() )
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
        { List.length ? List.map(( i, item ) => (
          <Todo
            key={ item }
            tittle={ i.title }
            description={ i.description }
            color={ i.color }
            ClickEdit={ () => OpenEditSection( i ) }
            ClickDelete={ () => OpenDeleteSection( i ) }
          />
        )) : ''
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