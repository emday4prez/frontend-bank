import {useContext} from 'react'
import {UserContext} from '../context'
 
function CreateAccount() {
 const context = useContext(UserContext)

  return (
    <div>{JSON.stringify(context)}</div>
  )
}

export default CreateAccount