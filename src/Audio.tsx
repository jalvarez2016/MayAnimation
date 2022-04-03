import { Audio } from "remotion";
import music from "./music.mp3";
 
export const Music: React.FC = () => {
  return <Audio src={music} />;
}