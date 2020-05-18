import { IconImage, IconGif, IconPoll, IconEmoji, IconPlus } from './Icons';
import PrimaryButton from './PrimaryButton';

function ComposeTweet() {
	return (
		<div className="flex px-4 mt-4">
			<div className="mr-4">
				<img
					src="https://pbs.twimg.com/profile_images/1196035290516742144/zhRQcqeh_bigger.jpg"
					className="rounded-full"
					style={{ height: 49, width: 49 }}
				/>
			</div>
			<div className="flex-1">
				<div>
					<textarea
						placeholder="What's happening ?"
						className="bg-transparent text-xl"
						style={{ resize: 'none' }}
					></textarea>
				</div>
				<div className="flex justify-between">
					<ul className="flex text-sm text-primary">
						<li className="px-2 py-2 hover:bg-gray-800 rounded-full">
							<IconImage className="text-2xl" />
						</li>
						<li className="px-2 py-2 hover:bg-gray-800 rounded-full">
							<IconGif className="text-2xl" />
						</li>
						<li className="px-2 py-2 hover:bg-gray-800 rounded-full">
							<IconPoll className="text-2xl" />
						</li>
						<li className="px-2 py-2 hover:bg-gray-800 rounded-full">
							<IconEmoji className="text-2xl" />
						</li>
					</ul>
					<ul className="flex text-sm text-primary items-center">
						<li className="px-2 py-2 hover:bg-gray-800 rounded-full mr-2">
							<IconPlus className="text-xl border border-primary rounded-full" />
						</li>
						<li>
							<PrimaryButton>Tweet</PrimaryButton>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default ComposeTweet;
