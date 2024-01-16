export type User = {
  id:number
  name:string
  mail:string
  img:string
}

export interface PickUserContextProps{
  filteredUser:User[]
  handleAddUser:(userSelect:User) => void
  handleDelete:(id:number) => void
  selectedUser:User[]
  isOpen:boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}