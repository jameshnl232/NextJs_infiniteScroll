import { list } from "@vercel/blob";
import { Suspense } from "react";

export default function Hero() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="relative w-full h-96 bg-gray-800 z-10">
          <Suspense fallback={<div>Loading...</div>}>
            <VideoComponent fileName="360p-vmake-rLJRTpfPL5lsoeQs182xloaVBsXOxZ.mp4" />
          </Suspense>
          <div className="text-center flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white w-full h-full text-black mix-blend-screen ">
            {" "}
            <h1 className="uppercase  text-5xl md:text-6xl lg:text-9xl font-bold">
              Welcome to anime list
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

async function VideoComponent({ fileName }: { fileName: string }) {
  const { blobs } = await list({
    prefix: fileName,
    limit: 1,
  });
  const { url } = blobs[0];

  return (
    <div>
      <video
        controls
        autoPlay
        muted
        loop
        aria-label="Video player"
        className=" w-full h-96 object-cover  "
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
