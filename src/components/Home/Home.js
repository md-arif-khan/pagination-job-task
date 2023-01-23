import React, { useEffect, useState } from 'react';
import Pagenation from '../Pagenation';
import TableRow from '../TableRow/TableRow';

const Home = () => {
    const [users,setUser]=useState([])
    const [loading,setLoading]=useState(false)
    const [currentPage,setCurrentPage]=useState(2)
    const [postsPage,setPostsPerPage]=useState(8)
    
    useEffect(()=>{
      setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>{
          setUser(data)
          setLoading(false)
        })
    },[])
    const indexOfLastPost=currentPage*postsPage;
    const indexOfFirstPost=indexOfLastPost-postsPage;
    const currentPost=users.slice(indexOfFirstPost,indexOfLastPost)
    const paginate=number=>setCurrentPage(number)
      
    
    return (
        <div className='bg-gradient-to-r from-slate-900 to-slate-700 w-full h-[730px]'> 
            <div className="overflow-x-auto p-5 w-full max-w-screen-xl mx-auto">
  <table className="table w-full border-separate border-spacing-y-3 ">
 
    <thead>
      <tr className=''>
        
        <th>NAME</th>
        <th>CONTACT</th>
        <th>CITY</th>
        <th>STREET</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
       {
        currentPost.map(user=><TableRow key={user.id} user={user} loading={loading} paginate={paginate}></TableRow>)
       }
    </tbody>
    
   
    
  </table>
        </div>
        <Pagenation paginate={paginate} postPerPage={postsPage} totalPost={users.length}></Pagenation>
        </div>
    );
};

export default Home;