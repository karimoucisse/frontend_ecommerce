import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import getCategories from '../api/getCategories';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



const SelectCategory = ({ onChange, selectedCategories }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
      const categories = await getCategories()
      setCategories(categories)
      console.log("My categories", categories)
  }

  return (
    <div>
      <FormControl sx={{width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label"> Catégories </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedCategories}
          onChange={onChange}
          input={<OutlinedInput label=" Catégoriess " />}
          renderValue={(selected) => selected.map(id => categories.find(category => category._id === id).name).join(", ")}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem key={category._id} value={category._id}>
              <Checkbox checked={selectedCategories.includes(category._id)} />
              <ListItemText primary={category.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategory;