import { Box, IconButton, Typography } from "@mui/material";
import "./ResultItemInterested.style.scss";
import CloseIcon from "@mui/icons-material/Close";

const ResultItemInterested = ({ selectedItems, handleRemoveItem }) => {
  return (
    <Box className="result-items-container">
      <h3>The skills you added</h3>
      <Box className="results-container">
        {selectedItems.map((item) => (
          <Box className="result-item-container">
            <Typography key={item.id} className="result-name">
              {item.name}
              <IconButton onClick={() => handleRemoveItem(item)}>
                <CloseIcon className="remove-icon" />
              </IconButton>
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResultItemInterested;
