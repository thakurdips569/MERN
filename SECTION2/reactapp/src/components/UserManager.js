import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import UpdateUser from './UpdateUser';

const UserManager = () => {

const [usersList, setUsersList] = useState([]);
const [showForm, setShowForm] = useState(false);
const [userFormData, setuserFormData] = useState(null);

      const getDataFromBackend = async () =>{
        const response = await fetch('http://localhost:5000/user/getall');
        const data = await response.json();     //alraedy conv in json
        console.log(data);
        // store data in state
        setUsersList(data);
        console.log('request sent');
      }
      
       useEffect(() => {
        getDataFromBackend();
       }, [])

       const deleteUser = async (id) => {
        // console.log(id);
        const response = await fetch('http://localhost:5000/user/delete/'+id,
         {
          method:'DELETE'
         })
         console.log(response.status);
         getDataFromBackend();
         toast.success('User Deleted🤦‍♂️')
       }

       const editUser =(userdata) =>{
        console.log(userdata);
        setuserFormData(userdata);
        setShowForm(true);
       }
       

       const showUsers =() =>{
        
        return <table className='table table-white table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Usename</th>
              <th>Age</th>
            </tr>
            </thead>
          <tbody>
            {
              usersList.map((user) => (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.email}</td>
                  <td>{user.username}</td>
                  <td>{user.age}</td>
                    <td>
                    <button className='btn btn-outline-primary' onClick={() => {editUser(user)}}>
                    <i class="fas fa-pencil-alt"></i>
                    </button>
                    </td>
                  <td>
                    <button className='btn btn-outline-danger' onClick={() => {deleteUser(user._id)}}>
                    <i class="fas fa-trash-alt"></i>
                    </button>
                    </td>
                </tr>
               ) )
            }
          </tbody>
           
          
        </table>

       }
       
  return (
    <AnimatePresence className='container'>
          <h1 UserManager className='text-center'>UserManager </h1> 
         <button onClick={getDataFromBackend}>Refresh</button>
         <div className="row">
          <div className="col-md">
          {showUsers()}
          </div>
          {
            showForm ?
            <div className="col-md">
                 <UpdateUser userFormData={userFormData}/>
            </div>
            :
            ""
          }
        </div>
         </AnimatePresence>
         
  );
}

export default UserManager