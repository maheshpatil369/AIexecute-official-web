import { useEffect, useRef, useState } from "react";

export default function BackgroundVideo() {
  const [introFinished, setIntroFinished] = useState(false);
  const introRef = useRef(null);

  useEffect(() => {
    if (introRef.current) {
      introRef.current.onended = () => {
        setIntroFinished(true);
      };
    }
  }, []);

  return (
    <>
     
      {!introFinished && (
        <video
          ref={introRef}
          autoPlay
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover z-[1000]"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
      )}

      {introFinished && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      )}
    </>
  );
}
