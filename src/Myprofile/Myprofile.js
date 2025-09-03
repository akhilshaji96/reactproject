import Header from "../Header/Header"
import { useSelector  } from 'react-redux';
function Myprofile(){
  const username = useSelector((state) => state.auth.username);
      console.log("username",username)
    return(
        <div>
        <Header />
<div class="profile-container">
    <div class="profile-card">
      <div class="avatar">
        <img src="https://i.pravatar.cc/150?img=12" alt="User Photo"></img>
      </div>
      <h5>Add Your Profile</h5>

      <div class="profile-form">
        <label>Full Name</label>
        <input type="text" value={username} placeholder="Enter your name"  />

        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Phone</label>
        <input type="tel" placeholder="Enter your phone number" />

        <label>Location</label>
        <input type="text" placeholder="Enter your location" />

        <button className="profile-btn" type="submit">Save Profile</button>
      </div>
    </div>
  </div>
  </div>

    
    )
}
export default Myprofile