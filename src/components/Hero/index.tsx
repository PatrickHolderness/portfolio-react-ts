
import HeroImage from '../HeroImage';
import { Heading, Paragraph, Section, TextContainer } from './styles';
import { LinkButton } from '../Buttons/styles';

const Hero: React.FC = () => {


  return (
    <Section id="Home">
      <HeroImage />
      <TextContainer>
        <Heading>{('Hello')}</Heading>
        <Paragraph>{('I`m Patrick, a full stack web developer based in Berlin.')}</Paragraph>
        <LinkButton to="Portfolio" smooth={true} offset={-80} duration={500}>
          {('Portfolio')}
        </LinkButton>
      </TextContainer>
    </Section>
  );
};
export default Hero;