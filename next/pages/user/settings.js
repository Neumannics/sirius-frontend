import Nav from "../../components/Nav"
import Image from "next/image"
import avatar from "../../images/avatar.png"
import tool from "../../images/tools.png"
const settings = () => {
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
                        <form method="POST" action="/user/settings/">
                            <input type="hidden" name="csrfmiddlewaretoken" value="ZGoaZKNXNRO1uWGzNMqqt00z0Qb0DgEoJP1cRaq1O14Nj5i8AMU8kYE4RxadzEnc"/>

                                <ul>

                                    <li>
                                        <p>
                                            <label for="id_first_name">First name</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="text" name="first_name" value="karan" required="" id="id_first_name"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_last_name">Last name</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="text" name="last_name" value="dhinakaran" id="id_last_name"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_email">Email address</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="text" name="email" value="karandinakaran01@gmail.com" disabled="" id="id_email"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_username">Username</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="text" name="username" value="Wassup" disabled="" id="id_username"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_old_password">Old password</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="password" name="old_password" required="" id="id_old_password"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_new_password1">New password</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="password" name="new_password1" required="" id="id_new_password1"/>


                                    </li>

                                    <li>
                                        <p>
                                            <label for="id_new_password2">Confirm password</label>
                                        </p>
                                        <input  className="border-2 border-gray-400" type="password" name="new_password2" required="" id="id_new_password2"/>


                                    </li>

                                </ul>
                                <input type="submit" value="Save" class="!w-[180px] mx-auto !bg-green"/>
                                </form>
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