import Lottie from 'react-lottie-player';
import * as animationData from './BadgeSVGData.json';

export const BadgeSVG = () => <Lottie loop={false} animationData={animationData} play />;
