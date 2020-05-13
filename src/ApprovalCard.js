import React from 'react';

const ApprovalCard = props => {

    return (
        <div className='container text-center'>
        <div className='content'> {props.children}</div>
        <button type="button" class="btn btn-primary">Approve</button>
        <button type="button" class="btn btn-danger">Reject</button>
        <br></br>
        </div>
     
    );

}

export default ApprovalCard