
import HeroImage from '../HeroImage';
import { Button, Heading, Paragraph, Section, TextContainer } from './styles';

const Hero: React.FC = () => {


  return (
    <Section id="Home">
      <HeroImage />
      <TextContainer>
        <Heading>{('HeroHeading')}</Heading>
        <Paragraph>{('HeroParagraph')}</Paragraph>
        <Button to="Portfolio" smooth={true} offset={-80} duration={500}>
          {('Portfolio')}
        </Button>
      </TextContainer>
    </Section>
  );
};
export default Hero;