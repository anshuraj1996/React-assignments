import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
<div className="container App">
  {/* Start your React code here */
  <div className="parent">
  <div className="Profile-image-container">
    <img className="profile" src={employee.profileImg} width="100" height="100"></img>
    </div>
    <div className="title">
    <h1>{employee.name}</h1>
  </div>
  <div className="profile-info1">
    <label>Location</label>
  </div>
  <div className="Profile-info"><b>{employee.location}</b></div>
  <div className="profile-info1">
    <label>Blood group</label>
  </div>
  <div className="Profile-info"><b>{employee.bloodGroup}</b></div>
  <div className="profile-info1">
    <label>Age</label>
  </div>
  <div className="Profile-info"><b>{employee.age}</b></div>
  </div>
}
</div>
)
}



export default App;
