import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { editRow, fetchTentById } from "../../api/DataApi";
import { Box, Button, TextField } from "@mui/material";

export default function EditForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tent, setTent] = useState({
        size: "",
        numofTent: "",
        stat: "",
        fee: "",
    });
    useEffect(() => {
        const loadTent = async () => {
            try {
                const data = await fetchTentById(id);
                console.log(data);
                setTent(data);
            } catch (error) {
                console.error("Error fetching tent:", error);
            }
        };
        loadTent();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editRow(id, tent);
            alert("Tent updated successfully!");
            navigate("../../Pages/Admin/Tent");
        } catch (error) {
            alert(error);
        }
    }

  return (
      <Box
          sx={{
              maxWidth: 600,
              margin: "auto",
              padding: 2,
              boxShadow: 3,
              borderRadius: 2,
          }}
      >
          <h2>Edit Tent</h2>
          <form onSubmit={handleSubmit}>
              <TextField
                  fullWidth
                  label="Size"
                  variant="outlined"
                  margin="normal"
                  value={tent.size}
                  onChange={(e) => setTent({ ...tent, size: e.target.value })}
              />
              <TextField
                  fullWidth
                  label="Number of Tents"
                  variant="outlined"
                  margin="normal"
                  value={tent.numofTent}
                  onChange={(e) => setTent({ ...tent, numofTent: e.target.value })}
              />
              <TextField
                  fullWidth
                  label="Status"
                  variant="outlined"
                  margin="normal"
                  value={tent.stat}
                  onChange={(e) => setTent({ ...tent, stat: e.target.value })}
              />
              <TextField
                  fullWidth
                  label="Rent Fee"
                  variant="outlined"
                  margin="normal"
                  value={tent.fee}
                  onChange={(e) => setTent({ ...tent, fee: e.target.value })}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                  <Button variant="contained" color="primary" type="submit">
                      Save
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={() => navigate("/tents")}>
                      Cancel
                  </Button>
              </Box>
          </form>
      </Box>  )
}
;