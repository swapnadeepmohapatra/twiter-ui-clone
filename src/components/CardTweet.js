import React from 'react';
import { Like, Retweet, Comment, Share } from '../components/Icons';

function CardTweet() {
	return (
		<article className="flex px-4 mt-4  border-b border-gray-600 pb-4">
			<div>
				<img
					src="https://pbs.twimg.com/profile_images/1196035290516742144/zhRQcqeh_bigger.jpg"
					className="rounded-full"
					style={{ height: 49, width: 49 }}
				/>
			</div>
			<section className="px-4 flex-1">
				<div className="flex">
					<h5 className="font-bold mr-2">Swapnadeep Mohapatra</h5>
					<span className="text-gray-400">@SwapnadeepTukk</span>
				</div>
				<p className="mt-0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga accusantium numquam blanditiis
					velit nemo obcaecati mollitia, ea corrupti? Dolores repellat alias cupiditate, quod libero
					distinctio sapiente. Incidunt, iusto expedita?
				</p>
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
