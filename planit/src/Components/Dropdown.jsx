import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdown = ({ unit, arr, setUnit }) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
        setUnit(event.target.value)
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">{unit}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Hours"
                onChange={handleChange}
            >
                {
                    arr.map(item => (
                        <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    );
}

export default Dropdown