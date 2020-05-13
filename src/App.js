import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import faker from 'faker';
import './App.css';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'



function App() {
  return (
    <div className="conatiner tex-center">

     <h1> IMAGE GENEREATOR </h1><hr></hr>
      <ApprovalCard>
      <CommentDetail author='sam'
      timeAgo='Today at 4:45PM' 
      content='Nice blog'
      avatar={faker.image.avatar()}/>

      </ApprovalCard><hr></hr>
    
     <ApprovalCard>
     <CommentDetail author='Alex'
      timeAgo='Today at 2:00pM' 
      content='i like the subject'
      avatar={faker.image.avatar()}/>
     </ApprovalCard><hr></hr>

      <ApprovalCard>
      <CommentDetail author='sinit' 
     timeAgo='Today at 8:00PM'
     content='i like the writing'
     avatar={faker.image.avatar()}/>
     </ApprovalCard><hr></hr>
     <ApprovalCard>
     <CommentDetail author='afom'
      timeAgo='Today at 9:00PM' 
      content='i like the content'
      avatar={faker.image.avatar()}/>
      </ApprovalCard><hr></hr>
   
     
    </div>
  );
}

export default App;
