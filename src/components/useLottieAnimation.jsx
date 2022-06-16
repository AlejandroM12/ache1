import { useLottie } from "lottie-react";

function useLottieAnimation({ animationData, loop, autoplay, width, height }) {
  const { View } = useLottie({
    animationData: animationData,
    loop: loop,
    autoplay: autoplay,
    width: width,
    height: height,
  });
  return View;
}

export default useLottieAnimation;
