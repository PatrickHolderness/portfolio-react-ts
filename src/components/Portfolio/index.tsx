import {
  InfoWrapper,
  Button,
  Grid,
  GridItem,
  HeadingContainer,
  Main,
  Thumbnail,
  Wrapper,
  ImageWrapper,
} from './styles';

import PORTFOLIO from '../../constants/PORTFOLIO';

const Portfolio: React.FC = () => {

  return (
    <Main id="Portfolio">
  <Wrapper>
        <HeadingContainer>
          <h2>{('Portfolio')}</h2>
          <p>{('PortfolioDescription')}</p>
        </HeadingContainer>
        <Grid>
          {PORTFOLIO.map(({ id, title, description, livePage, repository, techs, thumbnail }) => (
            <GridItem key={id}>
              <InfoWrapper>
                {title}
              </InfoWrapper>
              <ImageWrapper>
                <Thumbnail src={thumbnail} />
              </ImageWrapper>
            </GridItem>
          ))}
        </Grid>
      </Wrapper>
    </Main>
  );
};
export default Portfolio;