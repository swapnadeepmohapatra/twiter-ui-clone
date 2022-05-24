import React from 'react';
import { Like, Retweet, Comment, Share, Verified } from '../components/Icons';

function CardTweet({ imageUrl, verified, title, desc, username, image }) {
	return (
		<article className="flex px-4 mt-4  border-b border-gray-600 pb-4">
			<div>
				<img src={image} className="rounded-full" style={{ height: 49, width: 49 }} />
			</div>
			<section className="px-4 flex-1">
				<div className="flex items-center">
					<h5 className="font-bold">{title}</h5>
					{verified && <Verified className="ml-1" />}
					<span className="text-gray-400 ml-2">{username}</span>
				</div>
				<p className="mt-0" dangerouslySetInnerHTML={{ __html: desc }}></p>
				{imageUrl && (
					<img src={imageUrl} className="rounded-xl mt-4 border border-gray-900 h-64 w-full object-cover" />
				)}
				<ul className="flex justify-between text-gray-400 mt-4 mr-4">
					<li className="flex hover:text-primary">
						<button className="flex hover:text-primary">
							<Comment style={{ height: 24, width: 24 }} />
							<span className="ml-2">2</span>
						</button>
					</li>
					<li className="flex hover:text-retweet">
						<button className="flex hover:text-retweet">
							<Retweet style={{ height: 24, width: 24 }} />
							<span className="ml-2">200</span>
						</button>
					</li>
					<li className="flex hover:text-like">
						<button className="flex hover:text-like">
							<Like style={{ height: 24, width: 24 }} />
							<span className="ml-2">20</span>
						</button>
					</li>
					<li className="flex hover:text-primary">
						<button className="flex hover:text-primary">
							<Share style={{ height: 24, width: 24 }} className="mr-20" />
						</button>
					</li>
				</ul>
			</section>
		</article>
	);
}

export default CardTweet;
