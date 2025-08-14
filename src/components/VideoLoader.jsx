import { useEffect, useRef, useState } from "react";

export default function VideoLoader({ onEnd }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onended = () => {
        if (onEnd) onEnd();
      };
    }
  }, [onEnd]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover pointer-events-none filter brightness-90 contrast-110"
      >
        <source src="/AIExecute Opening Video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>
    </div>
  );
}
