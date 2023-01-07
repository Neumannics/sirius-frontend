import Link from "next/link"
import Head from "next/head"
import Nav from "../../components/Nav"


const Dashboard = () => {
    return (
        <>
            <Head>
                <Link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"
                    integrity="sha256-x8PYmLKD83R9T/sYmJn1j3is/chhJdySyhet/JuHnfY="
                    crossorigin="anonymous"
                />
                <Link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.0/tailwind.min.css"
                    integrity="sha256-CAI/7ThhltsmP2L2zKBYa7FknB3ZwFbD0nqL8FCdxdc="
                    crossorigin="anonymous"
                />
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
                    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
                    crossorigin="anonymous"
                ></script>
            </Head>
            <Nav />
            <main className="flex px-[15%] pt-[2%] justify-center mf:justify-start">
                <div className="flex flex-col mf:flex-row w-full">
                    <section className="w-full mf:w-[90%] flex flex-col items-center mf:items-start" >
                        <h3 className="mb-[2%] text-gray-600 ">Yours Teams</h3>
                        <ul className="flex flex-col justify-center">
                            <div className="flex flex-wrap justify-center mf:justify-start gap-[35px]">

                            </div>
                        </ul>
                    </section>
                    <div className="mb-[10vh] flex flex-col items-center pt-[75px]">
                        <section className="form-wrapper small-console mt-0 h-fit">
                            <h4 className="text-gray-600">Send a Request</h4>
                            <form method="POST" action="/team/send-join-request/">
                                <input className="border-2 border-gray-400" type="hidden" name="csrfmiddlewaretoken" value="p7bb2Y3uKxGK53XQ6JFQILX6AAWEUPcY9gOdUoGyLHWwUczpTJ9yzJBBrhVRQdVM"/>

                                    <ul>

                                        <li>
                                            <p>
                                                <label for="id_team_id">Team id</label>
                                            </p>
                                            <input className="border-2 border-gray-400" type="text" name="team_id" required="" id="id_team_id"/>


                                        </li>

                                    </ul>
                                    <input type="hidden" name="user_id" value="1"/>
                                        <input type="submit" value="Join" class="mb-0"/>
                                        </form>
                                    </section>
                                    <section className="small-console mt-[35px]">
                                        <h4 className="text-gray-600">Join Requests</h4>
                                        {/* <ul class="w-full pl-[16px] max-h-[240px] overflow-y-scroll mt-[16px] flex flex-col space-y-[10px]">
                    {% for req in join_requests %}
                        <li class="flex items-center">
                            <span class="inline-block h-[50px] w-[24px] mr-[16px]" id="req-badge-{{ req.pk }}"></span>
                            <span class="font-poppins text-[24px] text-grey tracking-[0.06rem] font-[500] min-w-[160px]">{{ req.team_id|truncatechars:6 }}</span>
                            <span class="inline-block ml-[16px] text-grey font-[300] italic text-[18px] req-status" id="req-status-{{ req.pk }}">{{ req.get_status_display }}</span>
                        </li>
                    {% endfor %} */}
                                        {/* </ul> */}
                                    </section>
                                </div>
                            </div>
                        </main>

                    </>
                    )
}

                    export default Dashboard