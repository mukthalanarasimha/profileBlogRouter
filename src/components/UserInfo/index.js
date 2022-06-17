import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="User_Information">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
          alt="profile"
          className="profile_information"
        />
        <h1 className="Info_heading">Wade Wareen</h1>
        <p className="info_paragragh">Software developer at UK</p>
      </div>
    )
  }
}
export default UserInfo
