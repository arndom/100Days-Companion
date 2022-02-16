import Lottie from 'react-lottie-player';
import * as animationData from './animatedSVGData.json';

export const AnimatedSVG = () => <Lottie loop animationData={animationData} play style={{ marginRight: '-5vw' }} />;
