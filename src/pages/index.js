import Link from 'next/link';
import {
	IconTwitterLogo,
	IconHome,
	IconExplore,
	IconNotifications,
	IconMessages,
	IconBookmarks,
	IconLists,
	IconProfile,
	IconMore,
	IconSparkle,
} from '../components/Icons';
import ComposeTweet from '../components/ComposeTweet';
import CardTweet from '../components/CardTweet';

const Home = () => {
	return (
		<div className="bg-body">
			<div
				className="bg-body text-white grid grid-cols-3 mx-16 min-h-screen"
				style={{ gridTemplateColumns: '218px 1fr 300px' }}
			>
				<nav className="fixed">
					<div className="mb-8 mt-4 ml-4">
						<IconTwitterLogo className="text-4xl" />
					</div>
					<ul>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconHome className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">Home</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconExplore className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">Explore</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconNotifications className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">Notifications</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconMessages className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">Messages</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconBookmarks className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">Bookmarks</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconLists className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">Lists</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconProfile className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">Profile</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
						<li className="mb-2">
							<Link href="">
								<a className="font-bold group block">
									<span className="inline-block">
										<span className="flex items-center font-bold group-hover:bg-gray-800 px-4 py-2 rounded-full">
											<span>
												<IconMore className="text-3xl" />
											</span>
											<span className="ml-4 text-lg">More</span>
										</span>
									</span>
								</a>
							</Link>
						</li>
					</ul>
				</nav>
				<div></div>
				<main className="min-h-screen border-l border-r border-gray-600">
					<header className="text-2xl font-bold flex justify-between px-4 border-b border-gray-600 py-4">
						<span>Home</span>
						<IconSparkle className="text-primary text-2xl" />
					</header>
					<ComposeTweet />
					<div className="h-4 bg-gray-900 mt-3 mb-3"></div>
					<ul>
						<li>
							<CardTweet />
						</li>
						<li>
							<CardTweet />
						</li>
						<li>
							<CardTweet />
						</li>
					</ul>
				</main>
				<aside>Links</aside>
			</div>
		</div>
	);
};

export default Home;

// export default function Home() {
// 	return (
// 		<div className="container">
// 			<Head>
// 				<title>Create Next App</title>
// 				<link rel="icon" href="/favicon.ico" />
// 			</Head>

// 			<main>
// 				<h1 className="title">
// 					Welcome to <a href="https://nextjs.org">Next.js!</a>
// 				</h1>

// 				<p className="description">
// 					Get started by editing <code>pages/index.js</code>
// 				</p>
// 			</main>

// 			<footer>
// 				<a
// 					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Powered by <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
// 				</a>
// 			</footer>

// 			<style jsx>{`
// 				.container {
// 					min-height: 100vh;
// 					padding: 0 0.5rem;
// 					display: flex;
// 					flex-direction: column;
// 					justify-content: center;
// 					align-items: center;
// 				}

// 				main {
// 					padding: 5rem 0;
// 					flex: 1;
// 					display: flex;
// 					flex-direction: column;
// 					justify-content: center;
// 					align-items: center;
// 				}

// 				footer {
// 					width: 100%;
// 					height: 100px;
// 					border-top: 1px solid #eaeaea;
// 					display: flex;
// 					justify-content: center;
// 					align-items: center;
// 				}

// 				footer img {
// 					margin-left: 0.5rem;
// 				}

// 				footer a {
// 					display: flex;
// 					justify-content: center;
// 					align-items: center;
// 				}

// 				a {
// 					color: inherit;
// 					text-decoration: none;
// 				}

// 				.title a {
// 					color: #0070f3;
// 					text-decoration: none;
// 				}

// 				.title a:hover,
// 				.title a:focus,
// 				.title a:active {
// 					text-decoration: underline;
// 				}

// 				.title {
// 					margin: 0;
// 					line-height: 1.15;
// 					font-size: 4rem;
// 				}

// 				.title,
// 				.description {
// 					text-align: center;
// 				}

// 				.description {
// 					line-height: 1.5;
// 					font-size: 1.5rem;
// 				}

// 				code {
// 					background: #fafafa;
// 					border-radius: 5px;
// 					padding: 0.75rem;
// 					font-size: 1.1rem;
// 					font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
// 						Bitstream Vera Sans Mono, Courier New, monospace;
// 				}

// 				.grid {
// 					display: flex;
// 					align-items: center;
// 					justify-content: center;
// 					flex-wrap: wrap;

// 					max-width: 800px;
// 					margin-top: 3rem;
// 				}

// 				.card {
// 					margin: 1rem;
// 					flex-basis: 45%;
// 					padding: 1.5rem;
// 					text-align: left;
// 					color: inherit;
// 					text-decoration: none;
// 					border: 1px solid #eaeaea;
// 					border-radius: 10px;
// 					transition: color 0.15s ease, border-color 0.15s ease;
// 				}

// 				.card:hover,
// 				.card:focus,
// 				.card:active {
// 					color: #0070f3;
// 					border-color: #0070f3;
// 				}

// 				.card h3 {
// 					margin: 0 0 1rem 0;
// 					font-size: 1.5rem;
// 				}

// 				.card p {
// 					margin: 0;
// 					font-size: 1.25rem;
// 					line-height: 1.5;
// 				}

// 				.logo {
// 					height: 1em;
// 				}

// 				@media (max-width: 600px) {
// 					.grid {
// 						width: 100%;
// 						flex-direction: column;
// 					}
// 				}
// 			`}</style>

// 			<style jsx global>{`
// 				html,
// 				body {
// 					padding: 0;
// 					margin: 0;
// 					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
// 						Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
// 				}

// 				* {
// 					box-sizing: border-box;
// 				}
// 			`}</style>
// 		</div>
// 	);
// }
