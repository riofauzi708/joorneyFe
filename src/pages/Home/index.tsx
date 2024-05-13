import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import phuket1 from "../../assets/Phuket 1.jpg";
import phuket2 from "../../assets/Phuket 1.jpg";
import phuket3 from "../../assets/Phuket 1.jpg";
import phuket4 from "../../assets/Phuket 1.jpg";
import phuket5 from "../../assets/Phuket 1.jpg";
import phuket6 from "../../assets/Phuket 1.jpg";
import ModalRegister from "../Auth/ModalRegister";
import ModalLogin from "../Auth/ModalLogin";

const images = [phuket1, phuket2, phuket3, phuket4, phuket5, phuket6];

function Home() {
  return (
    <>
      <Box position="relative" textAlign="center">
        <img
          src={phuket1}
          alt="Phuket Image"
          style={{ width: "100%", height: "80%", filter: "brightness(70%)" }}
        />
        <Box
          display={"flex"}
          justifyContent="flex-start"
          alignItems="flex-end"
          position="absolute"
          top={0}
          right={0}
          p={2}
          gap={2}
        >
          <ModalLogin />
          <ModalRegister />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            textAlign: "start",
          }}
        >
          <Typography variant="h2" component="h1" color="white" gutterBottom>
            The Journey
          </Typography>
          <Typography variant="h2" component="h1" color="white" gutterBottom>
            where you ever dreamed of.
          </Typography>
          <Typography variant="h6" color="white">
            We made a tool so you can easily keep & share your travel memories.
          </Typography>
          <Typography variant="h6" color="white">
            But there is a lot more
          </Typography>
        </Box>
      </Box>
      <Box mt={4} mx="auto" maxWidth={800}>
        <Typography variant="h4" gutterBottom>
          Joourney
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          style={{ marginBottom: "20px", width: "100%" }}
        >
          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            sx={{ width: "100%" }}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <Card
              key={index}
              style={{ width: "30%", marginBottom: "20px", gap: "10px" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={images[index]}
                alt={`Article ${index + 1}`}
              />
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Title {index + 1}
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  mb={1}
                >
                  Created At: {new Date().toLocaleDateString()}
                </Typography>

                <Typography variant="body1" color="textSecondary" component="p">
                  Content Content Content Content Content Content Content
                  Content Content Content Content Content Content Content
                  Content Content Content Content Content Content Content
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Home;
