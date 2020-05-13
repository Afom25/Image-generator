import React from 'react';
import faker from 'faker';

const CommmentDetail = props => {
    return (
        <div className='container text-center'><br></br>
        <a href='/' className='avatar'>
          <img alt='avatar' src={props.avatar}/>
        </a>
        <div className='content'>
          <a href='/' className='author'>
            <h3>{props.author}</h3>
          </a>
          <div className='metadata'>
            <span className='data'><h5> {props.timeAgo} </h5></span>
          </div>
          <div className='text'><h4>{props.content}  </h4></div>
        </div>
      </div>
    )
}

export default CommmentDetail