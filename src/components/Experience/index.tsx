
import { Grid, GridItem, HeadingContainer, Label, Section, Wrapper } from './styles';

import TECHS from '../../constants/TECHS';

const Experience = () => {


  return (
    <Section id="Experience">
      <Wrapper>
          <HeadingContainer>
          <h2>{('Experience')}</h2>
          <p>{('ExperienceDescription')}</p>
        </HeadingContainer>
    
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