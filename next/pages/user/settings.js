import Nav from "../../components/Nav"
import Image from "next/image"
import avatar from "../../images/avatar.png"
import tool from "../../images/tools.png"
import { useRef, useState } from "react"

// Not able to edit the values of the fields
// What to do with password??
// Update the info how?


export async function getStaticProps(){
    const res = await fetch("http://127.0.0.1:8000/get-details/1")
    const user = await res.json();

    return {
        props:{
            user
        }
    }
}





const settings = ({user}) => {
    // console.log(user)
    const [details,setdetails] = useState({first_name : user.first_name, last_name : user.last_name, email : user.email, username:user.username, gender:user.gender})

    async function Save(){
        console.log('!!!!')
        
    
        let res = await fetch("http://127.0.0.1:8000/get-details/1/",{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(details)
    
        });
        res = await res.json()
        console.log(res)
       
    }
    // const nameRef = useRef(user.first_name)
    return (
        
    <>
            <Nav />
            <div class="w-full flex flex-wrap-reverse lg:flex-row lg:flex-nowrap justify-center mt-[4vh] gap-y-[2vh]">
                <div class="items-center hidden mf:flex">
                    <Image src={tool} className="h-fit w-[560px]" width={500} height={500} />
                </div>
                <div class="form-wrapper flex items-center w-full">
                    <div>
                        <h2>Account</h2>

                        {/* <form onSubmit={Save} method="PUT" > */}
                            {/* <input  type="hidden" name="csrfmiddlewaretoken" value="ZGoaZKNXNRO1uWGzNMqqt00z0Qb0DgEoJP1cRaq1O14Nj5i8AMU8kYE4RxadzEnc"/> */}

                                <ul>

                                    <li>
                                        <p>
                                            <label for="id_first_name">First name</label>
                                        </p>
                                        <input onChange={(e)=> {setdetails(previousState=>{return {...previousState,first_name: e.target.value}})}} className="border-2 border-gray-400" value={details.first_name} type="text" name="first_name"  id="id_first_name"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_last_name">Last name</label>
                                        </p>
                                        <input onChange={(e)=> setdetails(previousState=>{return {...previousState,last_name: e.target.value}})} className="border-2 border-gray-400" type="text" name="last_name" value={details.last_name} id="id_last_name"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_email">Email address</label>
                                        </p>
                                        <input onChange={(e)=> setdetails(previousState=>{return {...previousState,email: e.target.value}})} className="border-2 border-gray-400" type="text" name="email" value={details.email} disabled="" id="id_email"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_username">Username</label>
                                        </p>
                                        <input onChange={(e)=> setdetails(previousState=>{return {...previousState,username: e.target.value}})} className="border-2 border-gray-400" type="text" name="username" value={details.username} disabled="" id="id_username"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_old_password">Old password</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="password" name="old_password" id="id_old_password"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_new_password1">New password</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="password" name="new_password1" id="id_new_password1"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_new_password2">Confirm password</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="password" name="new_password2" id="id_new_password2"/>


                                    </li>

                                </ul>
                                {/* <input  type="submit" value="Save" class="!w-[180px] mx-auto !bg-green"/> */}
                                <button type="button" onClick={Save}>submit</button>
                                {/* </form> */}
                            </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[300px] h-[300px] rounded-[150px] overflow-clip">
                            <Image src={avatar} class="h-fit" />
                        </div>
                    </div>
                </div>
            </>
            )
}

            export default settings