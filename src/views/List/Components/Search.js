//Component for search task

import ClearSearch from "../../../assets/images/ClearSearch.png";
import search from '../../../assets/images/search.png'
import { useDispatch } from "react-redux";
import { GetList, SearchTodoList } from "../../../modules/ToDoRequestes/ToDoAction";
import React from "react";

export const Search = ({ }) => {
  const dispatch = useDispatch();
  const [ SearchValue, SetValue ] = React.useState('')

  const handleChange = ( ev ) => {
    SetValue( ev.target.value )
  }

  const searchList = ( ) => {
    if ( SearchValue ) {
      dispatch( SearchTodoList( SearchValue ) )
    }
  }

  const clearSearchData = ( ) => {
    dispatch( GetList() )
    SetValue('' )
  }

  return (
    <div className={ 'SearchStyle' }>
      <button className={ 'ClearSearch' } onClick={ clearSearchData }>
        <img
          src={ ClearSearch }
          alt={ 'ClearSearch' }
        />
      </button>

      <input
        placeholder={ 'Search by id' }
        value={ SearchValue }
        onChange={ handleChange }
      />

      <button className={ 'SearchIcon' } onClick={ searchList }>
        <img
          src={ search }
          alt={ 'Search' }
        />
      </button>
    </div>
  )
}