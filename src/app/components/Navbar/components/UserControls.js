import { Box, Typography, Select, MenuItem, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserControls = () => {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <Typography style={{ color: '#E3F2FD' }}>Tokens: 50</Typography>
      <Select defaultValue="ENG" style={{ color: 'white' }}>
        <MenuItem value="ENG">English</MenuItem>
        <MenuItem value="FR">French</MenuItem>
      </Select>
      <IconButton>
        <AccountCircleIcon style={{ color: 'white' }} />
      </IconButton>
    </Box>
  );
};

export default UserControls;
