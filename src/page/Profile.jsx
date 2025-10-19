
import React from 'react'
import Images from '../utilits/Images/Images'

const Profile = () => {
  return (
    <div>
        <div className="containerdd">
            <div className="utils  flex items-center justify-between bg-slate-100 py-1 ">
                <div className="back-btn">
                    <img className='max-w-10' src={Images.Back} alt="" />
                </div>
                <div className="profile-name">
                    <h6 className='font-semibold text-teal-500'>Muhammad Zobayer</h6>
                </div>
                <div className="search-btn">
                    <img className='max-w-6' src={Images.Search} alt="" />
                </div>
            </div>
          <div className="profile">
            <div className="relative profile-cover h-50 mx-auto w-full md:w-[90%] lg:w-[80%] overflow-hidden ">
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/549579607_822118084098490_400127732483472269_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeH76U5dBg3g8WbmGincKQuT5KUswjcvK7jkpSzCNy8ruEc2fPeVwPqd1AsAfD7Mz5IeNr6saiI9l7ehnwBf7mR5&_nc_ohc=VtZpMTi5yR8Q7kNvwHDO6AQ&_nc_oc=Adls6q4QGSKdLtNRByTAx3B6Gt69OEp86jiACaqTM8q9yLFhL22ZSspEKLZlUhohsWo&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=TlZm_k-XYF0YN7PZ98EBAg&oh=00_AfeKKlhGkrtuSEBjQH75rjiQpjrI27tpazMSi9gczRA_Gw&oe=68FAF843"
                    alt=""
                />
                </div>

             <div className="relative -mt-25 m-auto w-35 h-35 rounded-full overflow-hidden border-4 border-teal-400">
                    <img 
                        src={Images.profile} 
                        alt="profile" 
                        className="w-full h-full object-cover object-center"
                    />
                    </div>

          </div>
          <div className="profile-name ml-4 mt-4">
            <h6 className='font-semibold text-teal-500 text-xl'>Muhammad Zobayer</h6>
          </div>

        </div>
    </div>
  )
}

export default Profile