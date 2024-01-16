import { createContext,useState } from "react"
import {data} from "../data.js"
import { User,PickUserContextProps } from "../types/type.js"


type Props = {
  children: string | JSX.Element | JSX.Element[] 
}

//exporting created context
export const Usercontext = createContext<PickUserContextProps>({});

const UserContext = ({children}: Props) => {
  const [selectedUser,setSelectedUser] = useState<User[]>([]);
  const [isOpen,setIsOpen] = useState(false);
  
  //show the available user
  const filteredUser = data.filter((item1:User) =>
    !selectedUser.some(item2 => item2.id === item1.id)
  );  

  //add the selected user
  const handleAddUser = (userSelect:User) => {
    setSelectedUser([...selectedUser,userSelect]);
    setIsOpen(false)    
  }

  //delete the current user
  const handleDelete = (id:number) => {
    setSelectedUser(selectedUser.filter((user:User) => user.id !== id))
  }
  return (
    <Usercontext.Provider value={{filteredUser,handleAddUser,handleDelete,selectedUser,isOpen,setIsOpen}}>
      {children}
    </Usercontext.Provider>
  )
}

export default UserContext