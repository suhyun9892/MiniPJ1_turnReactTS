import ReactPlayer from 'react-player'

export default function Background() {
  return (
    <>
      <ReactPlayer
        url={['https://youtu.be/hy8mQNqBmZw']}
        playing={true}
        loop={true}
        volume={0}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        className="reactPlayer"
      />
    </>
  )
}
