// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./addnewblog.css";
// import Header from "../Header/Header";
// import axios from "axios";
// import { Cookies } from "react-cookie";


// function AddNewBlog() {
  // let navigate = useNavigate();
  // const cookies = new Cookies();
  // const token = cookies.get("jwt");
  // const [dataSent, setDataSent] = useState(false);
  // const [images, setImage] = useState("");
  // const [url, setUrl] = useState("");
  // const [data, setdata] = useState({
  //   title: "",
  //       image:"",
  //       description: "",
  //       published_date: "",
  //       publisher: "",
  // });
  
  // useEffect(() => {
  //   const sendData = () => {
  //     axios({
  //       method: "post",
  //       url: "http://localhost:8080/addnewblog",
  //       headers: {
  //         Accept: "application/json",
  //         authorization: token,
  //         "Content-Type": "application/json",
  //       },
  //       data: data,
  //     })
  //       .then((res) => {
  //         window.alert("Blog details added successfully!");
  //         console.log(res);
          
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         alert("error in adding blog details");
  //       });
  //   };

  //   if (dataSent) {
  //     sendData();
  //     setDataSent(false);
  //     navigate("/property");
  //   }
  //   // eslint-disable-next-line
  // }, [url]);

  // useEffect(() => {
  // const postDetails = () => {
  //   const data = new FormData(); //it is use for uploading images
  //   data.append("file", images);
  //   //cloudinary details
  //   data.append("upload_preset", "insta-clone");
  //   data.append("cloud_name", "dgey8kugz");
  //   fetch("https://api.cloudinary.com/v1_1/dgey8kugz/images/upload", {
  //     method: "post",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUrl(data.url);
  //       setdata({ ...data, image: data.url })
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     }); 
  // };
  // postDetails();
  // },[images])

  // const handlesubmit =()=>{
  //   setDataSent(true)
   
  // }
    
 

  // return (
  //   <>
  //     <Header />
     
  //     <div className="main_section">
  //       <div className="heading">
  //         <h2>Add New Blog</h2>
  //       </div>
  //       <form className="form" onSubmit={handlesubmit}>
  //       <div className="title">
  //             <label for="title">Title</label>
  //             <div>
  //               <input
  //                 className="title"
  //                 required={true}
  //                 placeholder="Title"
  //                 onChange={(e) => setdata({ ...data, title: e.target.value })}
  //               ></input>
  //             </div>
  //           </div>
  //           <div className="email1">
  //             <label for="isbn">Image</label>
  //             <div>
  //               <input
  //               type="file"
  //                 className="isbn"
  //                 required={true}
  //                 placeholder="Select image"
  //                 onChange={(e) => setImage(e.target.files[0])}
  //               ></input>
  //             </div>
  //           </div>
  //           <div className="description">
  //             <label for="description">Description</label>
  //             <div>
                
  //             <textarea
  //                 className="description"
  //                 required={true}
  //                 placeholder="Description"
  //                 onChange={(e) => setdata({ ...data, description: e.target.value })}
  //               ></textarea>
               
  //             </div>
  //           </div>
          
           
            
            
  //         <Link to="/property">
  //           <button >Show Blog List</button>
  //         </Link>
  //         <button className="save2" type="submit">
  //           Add New Blog
  //         </button>
  //       </form>
  //     </div>
  //   </>
  // );
// }

// export default AddNewBlog;

import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import FileBase64 from "react-file-base64";
import "./addnewblog.css";
const AddNewBlog = () => {
  const [post, setpost] = useState({});
  const formdata = [
    {
      id: "title",
      placeholder: "Title",
      type: "text",
    },
    {
      id: "description",
      placeholder: "Description",
      type: "text",
    },
  ];
  const navigate = useNavigate();
  const handlesubmit = () => {
    axios({
      url: "http://localhost:8080/addnewblog",
      method: "POST",
      data: post,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/property");
  };
  const handlechange = (e, id) => {
    setpost({ ...post, [id]: e.target.value });
  };
  return (
    <>
      <Header />
      <div className="postbody">
        <div className="center">
          <h1>Add New Blog</h1>
          <br />
          
          <div className="input-file">
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setpost({ ...post, image: base64 })}
            />
          </div>

          <form>
            {formdata.map((data) => {
              return (
                <div id={data.id}>
                  <div className="inputbox" >
                    <input
                    className="input"
                      type={data.type}
                      placeholder={data.placeholder}
                      onChange={(e) => {
                        handlechange(e, data.id);
                      }}
                    />
                  </div>
                </div>
              );
            })}
            <div className="inputbox">
              <input type="button" value="POST" onClick={handlesubmit} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewBlog;
