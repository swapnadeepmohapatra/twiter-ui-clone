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
import SearchInput from '../components/SearchInput';
import TrendsList from '../components/TrendsList';

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
				<aside>
					<div>
						<SearchInput />
					</div>
					<div className="mt-4 ml-4 w-full">
						<TrendsList />
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Home;
