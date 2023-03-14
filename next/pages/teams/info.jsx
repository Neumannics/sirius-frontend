import Nav from "../../components/Nav"
import React, { useEffect } from "react";

export async function getStaticProps() {
    let res1 = await fetch("http://127.0.0.1:8000/teams/4b1546b8-4cef-4290-9bcc-449276f1d30d/info/")
    let res2 = await fetch("http://127.0.0.1:8000/get-details/")
    let res3 = await fetch("http://127.0.0.1:8000/authorization/4b1546b8-4cef-4290-9bcc-449276f1d30d/memberships/")
    let res4 = await fetch("http://127.0.0.1:8000/teams/create/")
    let team = await res1.json();
    let users = await res2.json();
    let membership = await res3.json();
    let teams = await res4.json();
    // console.log(membership)
    return {
        props: {
            team: team[0],
            users: users,
            mems: membership,
            teams: teams
        }
    }
}

// async function getStaticProps(){

//     let users = await res.json();
//     console.log(users)
//     return {
//         props:{
//             listUsers:users
//         }
//     }
// }

const TeamInfo = ({ team, users, mems, teams }) => {

    // console.log(users)
    // console.log(teams)
    const [_document, set_document] = React.useState(null)

    React.useEffect(() => {
        set_document(document)
    }, [])




    async function copyToClipboard() {
        const copyText = document.getElementById("copy-id");
        console.log('!!!!!!!!!')
        console.log(copyText)
        const sampleTextarea = document.createElement("textarea");
        document.body.appendChild(sampleTextarea);
        sampleTextarea.value = copyText.getAttribute('title'); //save main text in it
        // console.log(sampleTextarea.value)
        sampleTextarea.select(); //select textarea contenrs
        document.execCommand("copy");
        document.body.removeChild(sampleTextarea);

    }

    useEffect(() =>
        document.addEventListener('DOMContentLoaded', function () {
            const copyButton = document.getElementById('copy-button');
            const copyMsg = document.getElementById('copy-msg');
            copyButton.addEventListener("click", (e) => {
                copyMsg.classList.remove("hidden")
                setTimeout(() => {
                    copyMsg.classList.add("hidden");
                }, 1500);
            });
        }))


    const list = [];
    const members = [];
    const subTeams = [];

    mems.forEach((mem) => {
        list.push(mem.user_id)
    })

    users.forEach((user) => {
        if (list.includes(user.id)) {
            members.push(user);
        }
    })

    {
        teams.forEach((team) => {
            if (team.parent_id == '4b1546b8-4cef-4290-9bcc-449276f1d30d') {
                subTeams.push(team)
            }
        })
    }


    return (
        <>
            <Nav />
            {/* {console.log(team)} */}
            <div class="flex flex-col justify-start pl-[10%] w-full">
                <div class="w-[200px] h-[200px] rounded-full overflow-clip">
                    <img src="https://picsum.photos/300/300" />
                </div>
                <div class="font-poppins font-[300] tracking-[0.06rem] text-grey w-[400px]">
                    <p class="text-[18px]">
                        <span class="font-[600] text-[40px]">{team.name}</span>
                        <span title={team.id} class="font-medium cursor-help" id="copy-id">#{team.id.slice(0, 6)}..</span> {/*add truncate */}
                        <i id="copy-button" class='fa-solid fa-copy cursor-pointer inline-flex w-[40px] h-[40px] rounded-full bg-grey/10 justify-center items-center active:bg-grey/30 hover: ml-[16px]' onClick={copyToClipboard}></i>
                        <span id="copy-msg" class="hidden text-green">Copied!</span>
                    </p>
                    <p>Since {team.created_at}</p>
                </div>
                <div class="flex flex-col mf:flex-row gap-x-[128px] gap-y-[32px]">
                    <section>
                        <h2 class="my-[16px]">Members</h2>
                        <ul>
                            {members.map((member) => {
                                return (

                                    <li class="member-card">
                                        <div>
                                            <p className="member-name">{member.first_name} {member.last_name}</p>
                                            <p className="member-username">@{member.username}</p>
                                        </div>
                                        <p class="member-role"> MEMBER</p>
                                    </li>

                                )
                            })}
                            {/* {% for member in members %}
                    <li class="member-card">
                        <div>
                            <p class="member-name">{{ member.user_id__first_name }} {{ member.user_id__last_name }}</p>
                            <p class="member-username">@{{ member.user_id__username }}</p>
                        </div>
                        <p class="member-role">{{ member.role_id__role_name|upper }}</p>
                    </li>
                {% endfor %} */}
                        </ul>
                    </section>
                    <section>
                        <h2 class="my-[16px]">Teams</h2>
                        <ul class="ml-[40px]">
                            {/* {% for child in children %}
                    <li class="text-poppins text-[24px] font-[500] my-[16px] hover:scale-[1.02]"><a href="{% url 'team:team_info' pk=child.id %}">{{ child.name }}</a></li>
                {% endfor %} */}
                            {subTeams.map((e) => {
                                return (
                                    <li classname="text-poppins text-[24px] font-[500] my-[16px] hover:scale-[1.02]"><a href="#">{e.name}</a></li>
                                )
                            })}

                        </ul>
                    </section>
                </div>
            </div>
        </>
    )
}

export default TeamInfo