import { useState } from "react"
import Nav from "../../components/Nav"

// export async function getStaticProps(){
//     let res1
// }


const createTeam = () => {

    const [team, setTeam] = useState({name:"",description:""})

    async function createTeam(){
        console.log(team);
        let res = fetch("http://127.0.0.1:8000/teams/create/",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(team)

        });
        res =await res.json
        console.log(res)
    }

    return (
        <>
            <Nav />
            <div class="flex flex-row h-[100vh]">
                <div class="form-wrapper grow mt-[10vh]">
                    <div>
                        <header>
                            <h2>Start Your Journey</h2>
                        </header>
                        <ul>

                            <li>
                                <p>
                                    <label for="id_name">Name</label>
                                </p>
                                <input onChange={(e)=>{setTeam(previousState=> {return {...previousState,name:e.target.value}})}} className=" border-2 border-gray-400" type="text" name="name" maxlength="200" required="" id="id_name" />
                                <p>
                                    <label for="id_name">Description</label>
                                </p>
                                <input onChange={(e)=>{setTeam(previousState=> {return {...previousState,description:e.target.value}})}} className=" border-2 border-gray-400" type="text" name="name" maxlength="200" required="" id="id_name" />


                            </li>

                        </ul>
                        {/* <input type="submit" value="Create"/> */}
                        <a href="/teams/info">
                        <button type="button" onClick={createTeam}>Submit</button>
                        </a>


                    </div>
                </div>
                <div class="grow hidden mf:flex mf:w-1/2 justify-center items-start py-[8%]">
                    <img src="{% static 'images/woman_working.svg' %}" />
                </div>
            </div>
        </>
    )
}

export default createTeam