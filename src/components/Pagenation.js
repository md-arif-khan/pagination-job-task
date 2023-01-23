import React from 'react';

const Pagenation = ({postPerPage,totalPost,paginate}) => {
    const pageNumbers=[]
    for(let i=0; i<=Math.ceil(totalPost/postPerPage);i++){
        pageNumbers.push(i)
    }
    return (
<div className="btn-group flex justify-center ">
    {
        pageNumbers.map(number=>(
            <button onClick={()=>paginate(number)} key={number} className="btn">{number}</button>
        ))
    }
  
</div>
    );
};

export default Pagenation;