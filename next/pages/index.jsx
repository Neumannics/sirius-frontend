import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import wp from "../images/monitor.svg"

export default function Home() {
  return (
    <>
    <div className="bg-[#ff9100] bg-opacity-40">
	<header className="h-[20vh] px-[8%]">
		<nav className="flex justify-between h-full items-end pb-12">
			<h5><a href="">Sirius</a></h5>
			<ul>
				<li className="btn-s text-[24px]"><a href="/user/login_page">Login</a></li>
			</ul>
		</nav>
	</header>
	<div className="bg-primary ms:h-[80vh] px-[8%] flex items-center">
		<main className="flex-col flex ms:flex-row ms:flex w-full justify-center ms:justify-between items-center space-y-[96px] py-12 ms:py-0">
			<div>
				<div className="w-[340px] md:w-[480px]">
					<h1>
						Team management. Done right.
					</h1>
				</div>
				<a href="/user/signup">
					<button className="btn-s text-[32px] mt-[10px]">Let's go</button>
				</a>
			</div>
			<Image alt="" src={wp} className="mf:w-1/3 block w-[320px] ms:hidden mf:block" width={100} height={100}/>
			<div>
				<ul className="feature-list">
					<li>
						<i className="fa-solid fa-rocket"></i>
						<span>Fast</span>
					</li>
					<li>
						<i className="fa-solid fa-wind"></i>
						<span>Easy</span>
					</li>
					<li>
						<i className="fa-solid fa-shield"></i>
						<span>Secure</span>
					</li>
				</ul>
			</div>
		</main>
	</div>
</div>
    </>
  );
}
