import ReactPlayer from 'react-player'

export default function Background() {
  const UrlList = [
    'https://youtu.be/Zq74JyxRiXA',
    'https://youtu.be/fXX2DOzQ-8o?si=PkSrz3gDfED9vA_K',
    'https://youtu.be/hy8mQNqBmZw?si=QhlEjnf2oQjUytnO'
  ]

  const url = UrlList[Math.floor(Math.random() * UrlList.length)]
  return (
    <>
      <ReactPlayer
        url={url}
        playing={true}
        loop={true}
        muted={true}
        width="100vw"
        height="113%"
        style={{
          position: 'absolute',
          top: -60,
          left: 0,
          zIndex: -1,
          pointerEvents: 'none',
          objectFit: 'cover',
          backgroundColor: 'black',
          opacity: 0.7
        }}
      />
    </>
  )
}
