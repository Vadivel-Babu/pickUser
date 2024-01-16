import { useContext } from "react"
import { Usercontext } from "../context/UserContext"
import { RxCross2 } from "react-icons/rx";
import { User,PickUserContextProps } from "../types/type";


const Chip = () => {
  
  const { handleDelete,selectedUser} = useContext<PickUserContextProps>(Usercontext);
  return (
    <>
    {selectedUser.map((user:User) => (
      <div className="chip" key={user.id}>
      <img src={user.img} alt={user.name} className="chip__img" />
        <p className="name">{user.name}</p>
        <button className="btn" onClick={() => handleDelete(user.id)}>
          <RxCross2 />
        </button>
      </div>
      ))
    }
    </>
    
  )
}

export default Chip