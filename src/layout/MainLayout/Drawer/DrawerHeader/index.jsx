import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Chip } from '@mui/material';

// project import
import DrawerHeaderStyled from './DrawerHeaderStyled';
import LogoText from '../../../../components/Logo';
import Logo from '../../../../assets/images/users/logo.png'

// ==============================|| DRAWER HEADER ||============================== //

const DrawerHeader = ({ open }) => {
  const theme = useTheme();

  return (
    // only available in paid version
    <DrawerHeaderStyled theme={theme} open={open}>
      <Stack direction="row" spacing={1} alignItems="center">
        {!open ? (
          <img src={Logo} alt="Logo" width={20} height={20} />
        ) : (
          <LogoText />
        )}

      </Stack>
    </DrawerHeaderStyled>
  );
};
DrawerHeader.propTypes = {
  open: PropTypes.bool
};

export default DrawerHeader;
