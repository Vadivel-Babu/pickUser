
import { useContext,  useRef,useEffect,  useState, } from "react";
import { Usercontext } from "../context/UserContext";
import Chip from "./Chip";
import { User,PickUserContextProps } from "../types/type";

const Adduser = () => {

  const {filteredUser,
    handleAddUser,
    setIsOpen,
    isOpen} = useContext<PickUserContextProps>(Usercontext);

  const [searchText,setSearchText] = useState<string>('');
  const dropDownRef = useRef<HTMLInputElement>(null);  


  useEffect(() =>{
    function handleClose(e) {
      if(!dropDownRef.current.contains(e.target)){
        setIsOpen(false);
      }
    }
    
    document.addEventListener('click',handleClose)
      
    return () => {
      document.removeEventListener('click',handleClose)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  //set search field
  function handleSearchFilter(e:React.ChangeEvent<HTMLInputElement>){
    const searchWord = e.target.value;
     setSearchText(searchWord)
    setIsOpen(true);
  }

  //adding current user
  function addUser(user:User){
    setSearchText('')    
    handleAddUser(user)
  }
 
  return (
    <div className="users">
      <Chip/>
      <form className="form" onSubmit={(e) => e.preventDefault()}>             
        <input type="text" name="user" 
          id="user" className="input" 
          placeholder="Add new user..." 
          value={searchText}
          autoComplete="off" 
          onClick={() => setIsOpen(!isOpen)}
          onChange={handleSearchFilter}
          ref={dropDownRef}        
        />
        
        <div  className={!isOpen ? 'hide' : "suggestedUser"}>
          {filteredUser.filter((item:User) => {
            return searchText.toLowerCase() === ''
             ? item
             : item.name.toLowerCase().includes(searchText)
          }).map((user:User) => (
            <div className="user" 
             key={user.id} 
             onClick={() => addUser(user)}
            >
              <img src={user.img} alt={user.name} className="img" />
              <p className="name">{user.name}</p>
              <p className="mail">{user.mail}</p>
            </div>
           ))}
        </div>
      </form>
    </div>
  )
}

export default Adduser


