import { Parallax } from 'react-parallax';
import Ai from '../img/Hero2.jpg';

const ImageOne = () => (
    <Parallax bgImage="Ai" strength={800}>
        Content goes here. Parallax height grows with content height.
    </Parallax>
);

export default ImageOne;