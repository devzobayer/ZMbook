import React from 'react'
import Or from '../../utilits/Or/Or'
import { Link } from 'react-router'

const LoginForm = () => {
  return (
   <div className="bg-white shadow-lg rounded-lg shadow-gray-800 w-md py-6 px-3 ">
          <form className="flex flex-col space-y-5">
            <input
              type="email"
              placeholder="Email address"
              className="input"
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
            />
            <input
              type="submit"
              value="Login"
              className="submit-btn"
              
            />
          </form>
          <Link className="primary-text font-semibold ">Forgot your password?</Link>
            <Or css={'mt-5'}/>
            <h5 className='font-semibold text-slate-700 mt-4 text-center'>Don't have an account? <span className='primary-text'>Sign up</span></h5>
        </div>
  )
}

export default LoginForm