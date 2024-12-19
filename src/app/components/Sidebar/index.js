'use client';

import { Box } from '@mui/material';
import TaskCard from './components/TaskCard';

const tasks = [
  {
    title: 'Fix plumbing issue in the bathroom',
    description: 'A leaking faucet and clogged drain need urgent attention.',
    date: 'Posted: Dec 15, 2024',
    done: false,
  },
  {
    title: 'Translate a legal document to Spanish',
    description: 'Certified translator needed for a 10-page document.',
    date: 'Posted: Dec 14, 2024',
    done: true,
  },
  {
    title: 'Math tutoring for Grade 9 student',
    description: 'Looking for an experienced math tutor for weekly lessons.',
    date: 'Posted: Dec 13, 2024',
    done: false,
  },
  {
    title: 'Painting kitchen walls',
    description: 'Professional painter required for a 15x20 ft kitchen.',
    date: 'Posted: Dec 12, 2024',
    done: true,
  },
];

const Sidebar = () => {
  return (
    <Box style={{ width: '350px', padding: '20px', backgroundColor: '#F7FAFC', overflowY: 'auto' }}>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </Box>
  );
};

export default Sidebar;
