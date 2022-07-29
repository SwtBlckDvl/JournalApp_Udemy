import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
// import { NoteView } from "../views/NoteView";
import { NothingSelectedView } from "../views/NothingSelectedView";
export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
        asperiores ex ea id laudantium fugit? Quaerat labore quo eum dolore
        eaque praesentium quis beatae dolor ex possimus? Impedit, blanditiis
        possimus.
      </Typography> */}

      {/* NothingSelectedView */}
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
