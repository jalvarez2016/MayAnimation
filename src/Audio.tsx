import { Audio, interpolate, useCurrentFrame } from "remotion";
import music from "./music.mp3";
 
export const Music: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <Audio
      src={music}
      volume={interpolate(frame, [150, 240], [1, 0])}
    />
  );
}