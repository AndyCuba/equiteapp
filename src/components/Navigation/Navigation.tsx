import Image from 'next/image';
import { Button, Grid, Link } from '@mui/material';
import { styled } from '@mui/system';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import logoIcon from '../../../assets/images/logo.svg';
import Menu from '../Menu/Menu';

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
  marginRight: '32px',
  '&:hover': { textDecoration: 'underline' },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.primary}`,
  textTransform: 'none',
  padding: '9px 32px',
  borderRadius: '5px',
}));

export default function Header() {
  const isMaxWidth864 = useMediaQuery('(max-width: 864px)');
  const isMaxWidth480 = useMediaQuery('(max-width: 480px)');

  if (isMaxWidth480) {
    return (
      <nav>
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Grid item>
            <Link href="/">
              <Image src={logoIcon} alt="logo" />
            </Link>
          </Grid>
          <Grid item>
            <Menu />
          </Grid>
        </Grid>
      </nav>
    );
  } else {
    return (
      <nav>
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent={isMaxWidth864 ? 'center' : 'space-between'}
        >
          <Grid item lg={6}>
            <Grid container alignItems="center" direction="row">
              <Grid item sx={{ marginRight: '56px' }}>
                <Link href="/">
                  <Image src={logoIcon} alt="logo" />
                </Link>
              </Grid>
              <Grid item>
                <StyledLink
                  href="#"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Главная
                </StyledLink>
              </Grid>
              <Grid item>
                <StyledLink href="#">Блог</StyledLink>
              </Grid>
              <Grid item>
                <StyledLink href="#">Рейтинг</StyledLink>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6}>
            <Grid
              container
              alignItems="center"
              direction="row"
              justifyContent="flex-end"
            >
              <Grid item>
                <StyledLink href="#">PRO</StyledLink>
              </Grid>
              <Grid item>
                <StyledLink href="#" sx={{ color: '#6A7CE0' }}>
                  EN
                </StyledLink>
              </Grid>
              <Grid item>
                <StyledLink href="#" sx={{ marginRight: '48px' }}>
                  Войти
                </StyledLink>
              </Grid>
              <Grid item>
                <StyledButton>Зарегистрироваться</StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </nav>
    );
  }
}
