"use client"

const FakeBackground = () => {
  return (
    <div className="w-full h-full absolute top-0 left-0 block  ">
      <div className="w-full h-full absolute top-0 left-0 block bg-black/50"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="sm:h-md:block w-full h-full object-cover "
      >
        <source
          src="https://s3.ap-northeast-2.amazonaws.com/web-assets.togi.co/bg-video/bg-2.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default FakeBackground
