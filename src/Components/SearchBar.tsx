import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar() {
  return (
    <Autocomplete
      id="SearchBar"
      freeSolo
      fullWidth
      autoHighlight
      size = 'small'
      options={autoCompleteOptions.map((option) => option.title)}
      renderInput={(params) => <TextField {...params} label="Search stocks" />}
    />
  );
}

// TODO: True autocomplete data retrieval
const autoCompleteOptions = [
  { title: 'Bitcoin', year: 1994 },
  { title: 'Ethereum', year: 1972 },
  { title: 'Polygon', year: 1974 },
  { title: 'Shiba', year: 2008 },
  { title: 'Dogecoine', year: 1957 },
];
