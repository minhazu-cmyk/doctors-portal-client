import React, { useState } from 'react';

const AddDoctor = () => {
  const [info,setInfo] = useState({});
  const [file, setFile] = useState(null)
  const handleBlur = e=> {
    const newInfo = {...info}
    newInfo[e.target.name] = e.target.value
    setInfo(newInfo)
  }
  const handleChange = (e)=>{
    const newFile = e.target.file[0]
    setFile(newFile)
  }
  const handleSubmit= ()=>{
    const formData = new FormData()
  formData.append('file', file);
  formData.append('file', info.name);
  formData.append('file', info.email);

  fetch('http://localhost:5000/addDoctor', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })

  }
    return (
        <div className="container-fluid row">
            <div className="col-md-2">

            </div>
            <div className="col-md-5">
            <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onBlur={handleBlur} type="email" class="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">name</label>
    <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">upload your file here</label>
    <input onChange={handleChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="file"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
        </div>
    );
};

export default AddDoctor;