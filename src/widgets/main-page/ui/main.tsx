import { Box, Button, Typography } from "@mui/material";
import { MainTable } from "./table";
import { CreatePostModal } from "./create";
import { useModalStore } from "../model/modal-store";

export const Main = () => {
  const {openModal} = useModalStore((state) => ({openModal: state.openModal}))

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography variant="h1" mb={5} mt={5}>Главная страница</Typography>
        <Button variant="contained" color="success" onClick={openModal}>
          Создать
        </Button>
      </Box>
      <MainTable />
      <CreatePostModal/>
    </>
  );
};
