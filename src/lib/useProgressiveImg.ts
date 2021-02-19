import { useEffect, useState } from "react";

type TProgressiveImage = (
  lowQualitySrc: string,
  highQualitySrc: string
) => [src: string, blur: { blur: boolean }];

const useProgressiveImg: TProgressiveImage = (
  lowQualitySrc,
  highQualitySrc
) => {
  const [src, setSrc] = useState(lowQualitySrc);

  useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  return [src, { blur: src === lowQualitySrc }];
};
export default useProgressiveImg;
