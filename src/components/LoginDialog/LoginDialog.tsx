import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { Box, styled } from '@mui/system';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';

import GoogleIcon from '../../../assets/images/googleIcon.svg';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.primary}`,
  textTransform: 'none',
  padding: '9px 32px',
  borderRadius: '5px',
}));

const StyledBox = styled(Box)(({}) => ({
  width: '100%',
  height: '850px',
  borderRadius: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '0',
  textAlign: 'center',
}));

const StyledDialog = styled(Dialog)(({}) => ({
  backgroundColor: '#101C2B',
}));

const StyledDialogContent = styled(DialogContent)(({}) => ({
  width: '100%',
  padding: '44px 60px 0',
  borderBottom: '1px solid #1D2F3E',
}));

const StyledDialogTitle = styled(Typography)(({}) => ({
  fontWeight: 700,
}));

const StyledDialogText = styled(DialogContentText)(({ theme }) => ({
  fontWeight: 'normal',
  fontSize: '20px',
  lineHeight: '30px',
  textAlign: 'center',
  letterSpacing: '0.03em',
  color: theme.palette.text.primary,
  padding: '0 0 15px',
}));

const StyledContentWrapper = styled(Box)(({}) => ({
  backgroundColor: '#142634',
  borderRadius: '30px',
  marginTop: '37px',
  boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.5)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: '#101C2B',
  color: theme.palette.text.primary,
  marginBottom: '20px',
  borderRadius: '5px',
  borderBottom: 'none',
}));

const StyledLoginButton = styled(Button)(({}) => ({
  background: 'linear-gradient(86.33deg, #FF7E62 0%, #FFDA55 100%)',
  boxShadow: '0px 0px 30px rgba(212, 194, 238, 0.4)',
  borderRadius: '5px',
  width: '100%',
  height: '50px',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '13px',
  textTransform: 'uppercase',
  color: '#101C2B',
  marginBottom: '20px',
}));

const StyledGoogleButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#101C2B',
  boxShadow: '0px 0px 30px rgba(212, 194, 238, 0.4)',
  borderRadius: '5px',
  width: '100%',
  height: '50px',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '13px',
  textTransform: 'uppercase',
  color: theme.palette.text.primary,
}));

const StyledBorder = styled(Box)(({}) => ({
  width: '100%',
  position: 'relative',
  background: 'linear-gradient(86.33deg, #FF7E62 0%, #FFDA55 100%)',
  padding: '1px',
  borderRadius: '5px',
  height: '52px',
  marginBottom: '32px',
}));

const StyledLogin = styled(Box)(({}) => ({
  width: '100%',
  padding: '26px 0 0',
  height: '108px',
}));

const StyledTypography = styled(Typography)(({}) => ({
  margin: 0,
  paddingBottom: '51px',
  fontSize: '20px',
  lineHeight: '30px',
  letterSpacing: '0.03em',
}));

export default function LoginDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton variant="outlined" onClick={handleClickOpen}>
        Зарегистрироваться
      </StyledButton>
      <StyledDialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        PaperProps={{
          style: { borderRadius: 30, justifyContent: 'flex-end' },
        }}
      >
        <StyledBox>
          <StyledDialogTitle variant="h1">Добро Пожаловать</StyledDialogTitle>
          <StyledContentWrapper>
            <StyledDialogContent>
              <StyledDialogText>
                Зарегистрируйтесь в системе Equite.io, чтобы перейти к Equite.
              </StyledDialogText>
              <StyledTextField
                margin="dense"
                id="name"
                label="Адрес электронной почты"
                type="email"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
              <StyledTextField
                margin="dense"
                id="name"
                label="Пароль"
                type="password"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />
              <StyledLoginButton>Продолжить</StyledLoginButton>
              <StyledDialogText>или</StyledDialogText>
              <StyledBorder>
                <StyledGoogleButton
                  startIcon={<Image src={GoogleIcon} width="30" height="30" />}
                >
                  Продолжить с Google
                </StyledGoogleButton>
              </StyledBorder>
            </StyledDialogContent>
            <StyledLogin>
              <StyledTypography paragraph={true}>
                Уже есть учетная запись?
                <Link
                  href="#"
                  sx={{
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: '#F17C5F',
                  }}
                >
                  &nbsp;Вход в систему
                </Link>
              </StyledTypography>
            </StyledLogin>
          </StyledContentWrapper>
        </StyledBox>
      </StyledDialog>
    </div>
  );
}
