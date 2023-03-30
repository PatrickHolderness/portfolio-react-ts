
import HeroImage from '../HeroImage';
import { Heading, Paragraph, Section, TextContainer } from './styles';
import { LinkButton } from '../Buttons/styles';

const Hero: React.FC = () => {


  return (
    <Section id="Home">
      <HeroImage />
      <TextContainer>
        <Heading>{("I'm a frontend Developer")}</Heading>
        <Paragraph>{("I'm Patrick, and I'm constantly learning and improving to deliver outstanding web experiences. Currently I love to work with technologies such as React, Typescript, Tailwind and more.")}</Paragraph>
        <LinkButton to="Portfolio" smooth={true} offset={-80} duration={500}>
          {('Portfolio')}
        </LinkButton>
      </TextContainer>
    </Section>
  );
};
export default Hero;