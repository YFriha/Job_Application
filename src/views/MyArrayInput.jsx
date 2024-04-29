import "./index.css";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
export default function ArrayInput({ value, onChange }) {
  const handleChange = (index, newValue) => {
    const newArray = [...value];
    newArray[index] = newValue;
    onChange(newArray);
  };

  const handleAdd = () => {
    if (value.map((item, index) => value.item != "")) {
      console.log("Array Of string value ", value);
      onChange([...value, ""]);
    }
  };

  const handleRemove = (index) => {
    const newArray = [...value];
    newArray.splice(index, 1);
    onChange(newArray);
  };

  return (
    <div>
      {value.map((item, index) => (
        <div key={index}>
          <TextField
            value={item}
            onChange={(e) => handleChange(index, e.target.value)}
            sx={{marginBottom: '10px', marginRight: '10px'}}
          >

          </TextField>
          <Button
            color="primary"
            variant="contained"
            sx={{
              bgcolor: "#9cd6d1",
              ":hover": {
                bgcolor: "#009688",
              },
              marginTop: '10px'
            }}
            onClick={() => handleRemove(index)}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button
        color="primary"
        variant="contained"
        sx={{
          bgcolor: "#9cd6d1",
          ":hover": {
            bgcolor: "#009688",
          },
        }}
        onClick={handleAdd}
      >
        Add Requirement
      </Button>
    </div>
  );
}
