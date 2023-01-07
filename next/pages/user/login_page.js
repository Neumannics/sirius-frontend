const LoginPage = () => {
    return (

        <div className="flex flex-row h-[100vh]">
            <div className="form-wrapper mt-[10vh]">
                <div>
                    <header>
                        <a href="{% url 'landing' %}"><h5 className="text-primary">Sirius</h5></a>
                        <h6>New to Sirius? <a href="signup/"><span className="text-blue">Signup</span></a></h6>
                        <h2>Login</h2>
                    </header>
                    <form method="POST" action="/user/signin/">
                        <input type="hidden" name="csrfmiddlewaretoken" value="7UfAXfwSwS4cgzblrfafxJOebynPb1uvY9cu7T2qe297mkR0WJuXkyDk5bpIK3Fy" />

                        <ul>

                            <li>
                                <p>
                                    <label for="id_email">Email address</label>
                                </p>
                                {/* Changed the border inline */}
                                <input className=" border-2 border-gray-400" type="email" name="email" maxlength="254" required="" id="id_email" />


                            </li>

                            <li>
                                <p>
                                    <label for="id_password">Password</label>
                                </p>
                                <input  className="border-2 border-gray-400" type="password" name="password" required="" id="id_password" />


                            </li>

                        </ul>
                        <input id="grid-first-name" type="submit" value="Login" />

                        <section>
                            <p className="flex justify-center">Or signup with</p>
                            <ul class="flex justify-around flex-row text-[45px] py-[4%]">
                                <li><i className="fa-brands fa-google"></i></li>
                                <li><i className="fa-brands fa-facebook-f"></i></li>
                                <li><i className="fa-brands fa-github"></i></li>
                            </ul>
                        </section>
                    </form>
                </div>
            </div>
            <div className="grow bg-primary hidden md:flex md:w-1/2 justify-center items-center px-[5%]">
                <blockquote>
                    <div>
                        <i className="fa-solid fa-quote-left"></i>
                    </div>
                    <cite>Oscar Wilde</cite>
                    <p>Be yourself; everyone else is already taken.</p>
                </blockquote>
            </div>
        </div>

    )
}

export default LoginPage