
import { Grid, GridItem, Label, Section, Wrapper } from './styles';

import TECHS from '../../constants/TECHS';

const Experience = () => {


  return (
    <Section id="Experience">
      <Wrapper>
        <div>
          <h2>{('Experience')}</h2>
          <p>{('ExperienceDescription')}</p>
        </div>
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