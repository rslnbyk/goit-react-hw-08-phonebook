import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <h2 style={{ marginLeft: '10px', color: '#2a363b' }}>
        Find contacts by name
      </h2>
      <TextField
        type="text"
        name="filter"
        onChange={handleChange}
        label="Filter"
        variant="outlined"
        color="error"
        size="small"
        sx={{
          marginBottom: '15px',
          width: '300px',
          marginLeft: '10px',
        }}
      />
    </>
  );
};
