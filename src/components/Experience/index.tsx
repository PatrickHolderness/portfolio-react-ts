
import { Grid, GridItem, HeadingContainer, TextContainer, Label, Section, Wrapper } from './styles';
import { Textfit } from 'react-textfit';
import TECHS from '../../constants/TECHS';

const Experience = () => {


  return (
    <Section id="Experience">
      <Wrapper>
          <HeadingContainer>
          <h2>{('About Me')}</h2>
          </HeadingContainer>
          {/* <TextContainer>I am a certified full stack developer with a background in writing, translation and social care. */}

          <TextContainer>
          As an empathic and perceptive person, I enjoy collaborating as much as working independently. My curiosity, creativity and passion for technology have motivated me to take this leap to pursuing a career in full stack web development.
          <br></br>
          <br></br>
My key skills include:
          <br></br>
          <br></br>

<ul>
  
  <li>Effective communication, active listening, social perceptiveness</li>
  <li>A highly developed sense of professionalism and organisation</li>
  <li>Delivering exceptional outcomes within a given deadline</li>
  <li>Open and willing to learn new skills, tools and programming languages</li>
  <li>Ability to work well under pressure and to tight deadlines</li>
  </ul>

  <br></br>
  <br></br>

I have experience with the following technologies:
<br></br>
<br></br>

      </TextContainer>


        <Grid>
          {TECHS.map(({ id, title, icon, color }) => (
            <GridItem key={id} color={color}>
              {icon}
              <Label>{title}</Label>
            </GridItem>
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default Experience;