import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "./ResultItemLearned.style.scss";
import CloseIcon from "@mui/icons-material/Close";

const ResultItemLearned = ({ selectedItems, handleRemoveItem }) => {
  return (
    <Box className="results-learned-container">
      {selectedItems.map((item) => (
        <Box className="result-row-item-container" key={item.id}>
          <Box className="result-item2-container">
            <Typography className="result-name">{item.name}</Typography>
            <IconButton onClick={() => handleRemoveItem(item)}>
              <CloseIcon className="remove-icon" />
            </IconButton>
          </Box>

          <select>
            <option disabled selected hidden>
              Choose your skill
            </option>

            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </Box>
      ))}
    </Box>
  );
};

export default ResultItemLearned;
