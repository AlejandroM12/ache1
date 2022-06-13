import { useLottie } from 'lottie-react'

function useLottieAnimation({animationData, loop, autoplay}) {

    const {View} = useLottie({animationData: animationData, loop: loop,
    autoplay: autoplay,});
    return View
}

export default useLottieAnimation;