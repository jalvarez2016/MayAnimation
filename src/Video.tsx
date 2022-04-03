import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import { Animation } from './Animation';
import { Music } from './Audio'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={MyComposition}
				durationInFrames={240}
				fps={25}
				width={1280}
				height={720}
			/>
			<Animation/>
			<Music/>
		</>
	);
};
