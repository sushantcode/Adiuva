import React from "react";
import Navbar from "../../MainNavbar";
import "./CreatePost.css";

function CreatePost() {
  return (
    <><Navbar />
    <div className="contact-card">
    <div className="content-box">
        <div className="content">
          <h1> Creating New Post </h1>
            <div className="radio1">
                <form>
                <input type="radio" id="postRequest" name="postType" value="option1" /> Request
                <input type="radio" id="postDonate" name="postType" value="option2" /> Donate
                </form>
            </div>

            <div className="zipcode">
                <input type="text" id="zipcode" name="zipCode" placeholder=" Enter zipcode*" />
            </div>

            <div className="description-input">
              <label htmlFor="description" className="form-label">
                <input
                  id="description"
                  type="description"
                  name="description"
                  className="description-input"
                  placeholder="Please Describe what you are posting........"
                  />
              </label>
            
            </div>
              <button className="btnn" type="upload">
                Up Load Image
              </button>
              <button className="form-btnn" type="post">
                Post
              </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default CreatePost;