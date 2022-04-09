import {Composition} from 'remotion';
import { MayAnimation } from './MayAnimation';
import { Animation } from './Animation';
import { Music } from './Audio'

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition 
				id="Empty"
				component={MayAnimation}
				durationInFrames={240}
				fps={25}
				width={1280}
				height={720}
			/>
			<Composition
				id="Animation"
				component={Animation}
				durationInFrames={240}
				fps={25}
				width={1280}
				height={720}
			/>
			<Composition
				id="Music"
				component={Music}
				durationInFrames={240}
				fps={25}
				width={1280}
				height={720}
			/>
		</>
	);
};
