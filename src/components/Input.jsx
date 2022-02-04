
import TextField from '@mui/material/TextField';

const Input = ({placeholder, name, type, onChange, value, sx, height, border, padding, label, error}) => {
  return (
        <TextField id="demo-helper-text-misaligned-no-helper" 
        label={label} 
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={onChange}
        value= {value}
        sx= {sx}
        height= {height} 
        border= {border} 
        padding= {padding}
        error= {error ? true : false}
        >
    
        </TextField>
    )
};

export default Input;
