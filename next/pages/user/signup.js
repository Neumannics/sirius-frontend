const Signup = () => {
    return (

        <div class="flex flex-row">
            <div class="form-wrapper mt-[10vh] mb-[10vh]">
                <div>
                    <header>
                        <a href="{% url 'landing' %}">
                            <h5 class="text-primary">Sirius</h5>
                        </a>
                        <h6>Have an account? <a href="login_page/"><span class="text-blue">Login</span></a></h6>
                        <h2>Signup</h2>
                    </header>
                    <form method="POST" action="/user/signup/">
                        <input type="hidden" name="csrfmiddlewaretoken" value="rtwJfcD2v1LTInGQv1ok9BuRo6zk9NbtiItDpQ9AdbQOO8mv0vI2WqjXiJBdIPmw"/>

                            <ul>

                                <li>
                                    <p>
                                        <label for="id_username">Username</label>
                                    </p>
                                    <input type="text"  className="border-2 border-gray-400" name="username" maxlength="150" required="" id="id_username"/>

                                        <p class="field-help">
                                            Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
                                        </p>


                                </li>

                                <li>
                                    <p>
                                        <label for="id_email">Email address</label>
                                    </p>
                                    <input className="border-2 border-gray-400" type="email" name="email" maxlength="254" autofocus="" required="" id="id_email"/>


                                </li>

                                <li>
                                    <p>
                                        <label for="id_first_name">First name</label>
                                    </p>
                                    <input className="border-2 border-gray-400" type="text" name="first_name" maxlength="150" id="id_first_name"/>


                                </li>

                                <li>
                                    <p>
                                        <label for="id_last_name">Last name</label>
                                    </p>
                                    <input className="border-2 border-gray-400" type="text" name="last_name" maxlength="150" id="id_last_name"/>


                                </li>

                                <li>
                                    <p>
                                        <label for="id_password1">Password</label>
                                    </p>
                                    <input className="border-2 border-gray-400" type="password" name="password1" required="" id="id_password1"/>


                                </li>

                                <li>
                                    <p>
                                        <label for="id_password2">Password confirmation</label>
                                    </p>
                                    <input className="border-2 border-gray-400" type="password" name="password2" required="" id="id_password2"/>


                                </li>

                                <li>
                                    <p>
                                        <label for="id_gender">Gender</label>
                                    </p>
                                    <select className="border-2 border-gray-400" name="gender" required="" id="id_gender">
                                        <option value="" selected="">---------</option>

                                        <option value="M">Male</option>

                                        <option value="F">Female</option>

                                        <option value="NB">Non-Binary</option>

                                    </select>


                                </li>

                            </ul>
                            <input type="submit" value="Submit"/>
                            </form>
                        </div>
                </div>
                <div class="grow bg-primary hidden md:flex md:w-1/2 justify-center items-center px-[5%]">
                    <blockquote>
                        <div>
                            <i class="fa-solid fa-quote-left"></i>
                        </div>
                        <cite>13 Hours</cite>
                        <p>All the gods, all the heavens, all the hells are within you.</p>
                    </blockquote>
                </div>
            </div>
            )
}

            export default Signup