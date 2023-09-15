import React from 'react'

const Registration = () => {
  return (
    <>

        <div> <img src='../assets/img/neonlogo.svg'/>
            <h1 className="text-center">Registration</h1><br/>
            <div>
                <form action="/register" method="POST">
                <input type='text' placeholder='Username'/>
                <input type='text' placeholder='Mobile_number'/>


                </form>
            </div>
        </div>
    </>
  )
}

export default Registration