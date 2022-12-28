import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import ReadMoreReact from "read-more-react";
import { Cookies } from "react-cookie";
import Header from "../Header/Header";
import "./Property.css";

const Property = () => {
  // const [value, setValue] = useState("");
  // const [show,setShow] = useState(false);
  const [users, setUsers] = useState([]);
  const cookies = new Cookies();
  const token = cookies.get("jwt");
  let navigate = useNavigate();

  useEffect(() => {
    const afterLogin = () => {
      axios({
        method: "get",
        url: "http://localhost:8080/blogs",
        headers: {
          Accept: "application/json",
          authorization: token,
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => {
          setUsers(res.data.property);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    };

    afterLogin();
  }, [token, navigate]);

  const handleImgClick = (id) => {
    localStorage.setItem("Id", id);
    navigate("/bookdetails");
  };

  return (
    <>
      <Header />
      <div className="head">
        <div className="headerContainer">
          <h1>Blog Lists</h1>
          <Link to="/AddNewBlog">
            {" "}
            <button className="btn_add">
              <span className="text_btn">Add new Blog</span>
            </button>{" "}
          </Link>
        </div>

        <div className="imageContainer">
          {[...users].map((user, i) => {
            return (
              <div className="images" key={i}>
                <img
                  id="image"
                  src={user.image}
                  alt=""
                  onClick={() => handleImgClick(user._id)}
                />
                <h4 id="date" style={{ color: "grey" }}>
                  {user.Date}
                </h4>
                <h3 id="title" style={{ color: "blue" }}>
                  {user.title}
                </h3>
                {/* <ReadMoreReact
                  text={user.description}
                  min={30}
                  ideal={100}
                  max={200}
                /> */}
                <p id="description">{user.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Property;
