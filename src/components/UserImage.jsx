import { Box } from "@mui/material";
import { apiUrl } from "../config/apiUrl";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`${apiUrl}/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
