import Nav from "../../components/Nav"

const createTeam = () => {
    return (
        <>
            <Nav />
            <div class="flex flex-row h-[100vh]">
                <div class="form-wrapper grow mt-[10vh]">
                    <div>
                        <header>
                            <h2>Start Your Journey</h2>
                        </header>
                        <form method="POST" action="/team/create/">
                            <input type="hidden" name="csrfmiddlewaretoken" value="2n0xwyYFa0TbYSv3NFOXw4glvAlspq14MwDzoYBJba9XN17CAFiFn2UQmhkFlOKS"/>

                                <ul>

                                    <li>
                                        <p>
                                            <label for="id_name">Name</label>
                                        </p>
                                        <input  className=" border-2 border-gray-400" type="text" name="name" maxlength="200" required="" id="id_name"/>


                                    </li>

                                </ul>
                                <input type="submit" value="Create"/>
                                </form>

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