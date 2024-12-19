import { Card, CardContent, Typography, Checkbox, Box, IconButton, Chip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';

const TaskCard = ({ task }) => {
  return (
    <Card
      sx={{
        marginBottom: '10px',
        borderRadius: '12px',
        background: task.done
          ? 'linear-gradient(135deg, #A0F0BA 0%, #E6FFFA 100%)'
          : 'linear-gradient(135deg, #FEB2B2 0%, #FFF5F5 100%)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        padding: '8px',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
        <Box sx={{ display: 'flex', gap: '6px' }}>
          <Checkbox
            defaultChecked={task.done}
            sx={{
              padding: 0,
              color: task.done ? '#38A169' : '#E53E3E',
              '&.Mui-checked': {
                color: task.done ? '#38A169' : '#E53E3E',
              },
            }}
          />
          <IconButton color="inherit" sx={{ padding: '2px' }}>
            <StarIcon sx={{ color: task.done ? '#2F855A' : '#C53030', fontSize: '1.1rem' }} />
          </IconButton>
          <IconButton color="inherit" sx={{ padding: '2px' }}>
            <EditIcon sx={{ color: task.done ? '#2F855A' : '#C53030', fontSize: '1.1rem' }} />
          </IconButton>
          <IconButton color="inherit" sx={{ padding: '2px' }}>
            <DeleteIcon sx={{ color: task.done ? '#2F855A' : '#C53030', fontSize: '1.1rem' }} />
          </IconButton>
        </Box>
      </Box>
      <CardContent sx={{ padding: '0 6px 6px 6px' }}>
        <Typography variant="subtitle1" sx={{ fontWeight: '600', marginBottom: '4px', color: '#1A202C' }}>
          {task.title}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '6px', color: '#4A5568', lineHeight: 1.3 }}>
          {task.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Typography variant="caption" sx={{ color: '#718096' }}>
            {task.date}
          </Typography>
          <Chip
            label={task.done ? 'Completed' : 'Pending'}
            sx={{
              backgroundColor: task.done ? '#2F855A' : '#C53030',
              color: '#F7FAFC',
              fontWeight: 'bold',
              height: '20px',
              fontSize: '0.7rem',
              padding: '0 6px',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
