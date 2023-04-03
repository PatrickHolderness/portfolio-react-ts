import { useRef, useState } from 'react';
import Image from '../../assets/image1.png';

import { Container, Picture, PictureBg, Slider } from './styles';

const HeroImage: React.FC = () => {
  

  return (
    <Container>
      <Picture src={Image} />

    </Container>
  );
};
export default HeroImage;