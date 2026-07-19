import Comment from "./comment";
import PlayButton from "./play-button";
import VibeDetails from "./vibe-details";
import VibeComments from "./vibe-comments";
import CreateComment from "./create-comment";

export default function VibeCard({ id }) {
  return (
    <VibeDetails>
      <CreateComment vibeId={id} />
      <VibeComments vibeId={id} />
    </VibeDetails>
  );
}
