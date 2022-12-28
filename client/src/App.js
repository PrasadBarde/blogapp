import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Signup-Login/Login";
import Signup from "./Components/Signup-Login/Signup";
import Protected from "./Components/Protected/protected";
import AddNewBlog from "./Components/AddNewProperty/addnewblog";
// import BookDetails from "./Components/AddNewProperty/bookDetails";
import Property from "./Components/property/Property";
// import EditBookDetails from "./Components/AddNewProperty/EditBookDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
           <Route
            path="/property"
            element={
              <Protected>
                <Property />
              </Protected>
            }
          ></Route>
          {/*
            <Route
            path="/bookdetails"
            element={
              <Protected>
                <BookDetails />
              </Protected>
            }
          ></Route>
           <Route
            path="/editbookdetails"
            element={
              <Protected>
                <EditBookDetails />
              </Protected>
            }
          ></Route>
          */}
          <Route
            path="/AddNewBlog"
            element={
              <Protected>
                <AddNewBlog />
              </Protected>
            }
          ></Route> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
