import { Video } from "remotion";
import vid from "./WIP.mp4";
import { Music } from './Audio'
 
export const MayAnimation: React.FC = () => {
  return (
    <>
      <Video src={vid} />
      <Music />
    </>
  )
};