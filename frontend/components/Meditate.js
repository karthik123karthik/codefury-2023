import ReactPlayer from "react-player";

export default function Meditate() {
  return (
    <div class="candle">
      <div class="flame">
        <div class="shadows"></div>
        <div class="top"></div>
        <div class="middle"></div>
        <div class="bottom"></div>
      </div>
      <div class="wick"></div>
      <div class="wax"></div>
      <ReactPlayer
        url="/meditatemusic.mp3"
        playing={true} // Auto-play the audio
        controls={true} // Show playback controls
        loop={true} // Loop the audio
        volume={1} // Adjust the volume (0.0 to 1.0)
        width="0px" // Hide the player visually
        height="0px"
      />
    </div>
  );
}
