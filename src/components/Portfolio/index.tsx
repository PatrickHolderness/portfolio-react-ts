
import { BtnsWrapper, Button, Grid, GridItem, Main, Thumbnail } from './styles';

const Portfolio: React.FC = () => {

  return (
    <Main id="Portfolio">
      <h2>{('Portfolio')}</h2>
      <p>{('PortfolioDescription')}</p>
      <Grid>
        <GridItem>
          <Thumbnail />
          <BtnsWrapper>

            <Button>{('Demo')}</Button>
            <Button>{('Code')}</Button>
          </BtnsWrapper>
        </GridItem>
      </Grid>
       </Main>
       );
     };
     export default Portfolio;