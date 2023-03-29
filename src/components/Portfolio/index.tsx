import {
  Title,
  Grid,
  GridItem,
  HeadingContainer,
  Main,
  Thumbnail,
  Wrapper,
  ImageWrapper,
  ProjectData,
  BtnContainer,
  Description,
  TechContainer,
  TechLabel,
} from './styles';

import { AnchorButton } from '../Buttons/styles';

import PORTFOLIO from '../../constants/PORTFOLIO';

const Portfolio: React.FC = () => {

  return (
    <Main id="Portfolio">
  <Wrapper>
        <HeadingContainer>
          <h2>{('Portfolio')}</h2>
          <p>{('Portfolio Description')}</p>
        </HeadingContainer>
        <Grid>
        {PORTFOLIO.map(
            ({
              id,
              title,
              description,
              livePage,
              repository,
              techs,
              thumbnail,
            }) => (
              <GridItem key={id}>
                <Title>{title}</Title>
                <ImageWrapper>
                  <Thumbnail src={thumbnail} />
                </ImageWrapper>
                <ProjectData>
                  <TechContainer>
                    {techs.map(t => (
                      <TechLabel>{t}</TechLabel>
                    ))}
                  </TechContainer>
                  <Description>{description} </Description>
                  <BtnContainer>
                    {livePage && (
                      <AnchorButton href={livePage} target="_blank">
                        {('Demo')}
                      </AnchorButton>
                    )}
                    <AnchorButton href={repository} target="_blank">
                      {('Code')}
                    </AnchorButton>
                  </BtnContainer>
                </ProjectData>
              </GridItem>
            )
          )}
        </Grid>
      </Wrapper>
    </Main>
  );
};
export default Portfolio;