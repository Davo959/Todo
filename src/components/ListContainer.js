/* Component for Container ,
   there are , background-image ,
   Edit section ,
   Delete Section
*/

import { EditTodo } from "../views/List/Components/EditTodo";
import { DeleteTodo } from "../views/List/Components/DeleteTodo";


export const ListContainer =({ children, Edit, CloseEditSection, CloseDeleteSection, id })=>{
  return(
    <div>
      <div className={ 'ContainerBackground' }>

      { Edit &&
        <EditTodo
          EditInfo={ Edit }
          CloseSection={ CloseEditSection }
        />
      }

      { id  &&
        <DeleteTodo
          item={ id }
          CloseDeleteSection={ CloseDeleteSection }
        />
      }
      { children }

     </div>
    </div>
  )
}