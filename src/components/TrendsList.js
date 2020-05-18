import React from 'react';
import { IconDowm } from './Icons';

function TrendsList() {
	return (
		<section className="bg-gray-500 rounded-xl">
			<div className="px-5 py-3 font-bold text-xl border-b border-gray-600">
				<h4>What’s happening</h4>
			</div>
			<div>
				<ul>
					<li className="px-5 py-2 hover:bg-gray-900 flex justify-between border-b border-gray-600">
						<div>
							<span className="text-gray-400 text-sm">Trending in India</span>
							<h6 className="text-lg font-bold">#RoastNahiFryKarunga</h6>
							<span className="text-gray-400">14.5k Tweets</span>
						</div>
						<span>
							<IconDowm className="text-gray-400" />
						</span>
					</li>
					<li className="px-5 py-2 hover:bg-gray-900 flex justify-between border-b border-gray-600">
						<div>
							<span className="text-gray-400 text-sm">Politics · Trending</span>
							<h6 className="text-lg font-bold">#BanTiktok</h6>
							<span className="text-gray-400">18.1K Tweets</span>
						</div>
						<span>
							<IconDowm className="text-gray-400" />
						</span>
					</li>
					<li className="px-5 py-2 hover:bg-gray-900 flex justify-between border-b border-gray-600">
						<div>
							<span className="text-gray-400 text-sm">Trending in India</span>
							<h6 className="text-lg font-bold">#20MFORCARRY</h6>
							<span className="text-gray-400">93.3K Tweets</span>
						</div>
						<span>
							<IconDowm className="text-gray-400" />
						</span>
					</li>
					<li className="px-5 py-2 hover:bg-gray-900 flex justify-between border-b border-gray-600">
						<div>
							<span className="text-gray-400 text-sm">COVID-19 · LIVE</span>
							<h6 className="font-bold">
								COVID-19: More than 60 nations back Australia's call for an independent inquiry into the
								virus origins
							</h6>
						</div>
						<span>
							<IconDowm className="text-gray-400" />
						</span>
					</li>
				</ul>
				<div className="hover:bg-gray-900 px-5 py-4 text-primary">
					<button>Show More</button>
				</div>
			</div>
		</section>
	);
}

export default TrendsList;
