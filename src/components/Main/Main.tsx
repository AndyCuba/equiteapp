import Image from 'next/image';
import { Button, Grid, Typography } from '@mui/material';
import { Box, styled } from '@mui/system';
import { useMediaQuery } from '@material-ui/core';
import background_1 from '../../../assets/images/background_1.svg';
import background_2 from '../../../assets/images/background_2.svg';

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  paddingBottom: '24px',
  maxWidth: '584px',
  fontWeight: 600,
}));

const StyledParagraph = styled(Typography)(({}) => ({
  marginBottom: '32px',
  maxWidth: '570px',
}));

const StyledButton = styled(Button)(({}) => ({
  borderRadius: '6px',
  textTransform: 'none',
  width: '170px',
  height: '48px',
  marginBottom: '431px',
}));

const StyledBG_1 = styled(Box)(() => ({
  position: 'absolute',
  right: '-96px',
  width: '576px',
  height: '554px',
  zIndex: -1,
}));

const StyledBG_2 = styled(Box)(({}) => ({
  position: 'absolute',
  left: '-96px',
  top: '767px',
  width: '576px',
  height: '898px',
  zIndex: -1,
}));

export default function Main() {
  const isMaxWidth480 = useMediaQuery('(max-width: 480px)');
  return (
    <main>
      <Grid
        container
        sx={{
          paddingTop: isMaxWidth480 ? '15px' : '224px',
          position: 'relative',
        }}
      >
        <Grid item lg={12}>
          <section>
            <StyledHeading variant="h3">
              Инструмент мониторинга для трейдера, которому доверяют
            </StyledHeading>
            <StyledParagraph paragraph={true}>
              Создайте портфолио со своими фактическими успехами — повысьте
              доверие у заинтересованных людей.
            </StyledParagraph>
            <StyledButton variant="contained">Начать работу</StyledButton>
          </section>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Grid item lg={6}>
          <section>
            <StyledHeading variant="h3">Проверенные результаты</StyledHeading>
            <StyledParagraph paragraph={true}>
              Объективные и сухие цифры подойдут не только для мониторинга своих
              результатов, но и для того, чтобы вызвать доверие у инвесторов
              или своей публики.
            </StyledParagraph>
          </section>
        </Grid>
      </Grid>
      <StyledBG_1 sx={{ top: isMaxWidth480 ? '100px' : '-92px' }}>
        <Image src={background_1} alt="background image" />
      </StyledBG_1>
      <StyledBG_2 sx={{ top: isMaxWidth480 ? '1100px' : '767px' }}>
        <Image src={background_2} alt="background image" />
      </StyledBG_2>
    </main>
  );
}
