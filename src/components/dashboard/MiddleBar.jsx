import React from 'react'
import profile from '../../assets/profile.png'

const MiddleBar = () => {
  return (
    <>
        <div className='middle-bar'>
            <div className='profile-box'>
                <img src={profile} alt="profile"  className='profile-img'/>
                <h4>Welcome, User</h4>
            </div>
            <div className='profile-box'>
                <button className='middle-button'>Billing</button>
                <button className='middle-button'>Expense</button>
            </div>
        </div>
    </>
  )
}

export default MiddleBar