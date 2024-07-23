import { Box, Button, Modal, TextField, Typography, Fade, Backdrop } from "@mui/material";
import { useMutation } from "react-query";
import { postQuery, queryClient } from "@shared/api";
import toast from "react-hot-toast";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useModalStore } from "../model/modal-store";

const validationSchema = Yup.object({
  title: Yup.string().required("Заголовок обязателен").max(30, "Заголовок не должен превышать 30 символов"),
  author: Yup.string().required("Автор обязателен").max(20, "Имя автора не должно превышать 20 символов"),
  views: Yup.number().required("Количество просмотров обязательно").min(0, "Количество просмотров не может быть отрицательным"),
  likes: Yup.number().required("Количество лайков обязательно").min(0, "Количество лайков не может быть отрицательным"),
  comments: Yup.number().required("Количество комментариев обязательно").min(0, "Количество комментариев не может быть отрицательным"),
});
interface FormData {
  title: string;
  author: string
  views: number 
  likes: number 
  comments: number
}
export const CreatePostModal = () => {
  const mutation = useMutation(postQuery('posts'), {
    onSuccess: () => {
      toast.success('Пост успешно создан');
      queryClient.invalidateQueries('posts');
    },
    onError: () => {
      toast.error('Ошибка при создании поста');
    }
  });

  const { isOpen, closeModal } = useModalStore((state) => ({
    isOpen: state.isOpen,
    openModal: state.openModal,
    closeModal: state.closeModal
  }));

  const { control, handleSubmit, reset, watch, formState: { errors, isValid, isSubmitting } } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange"
  });

  watch(["title", "author", "views", "likes", "comments"]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    mutation.mutate(data);
    reset({ title: "", author: "", views: 0, likes: 0, comments: 0 });
    closeModal();
  };

  return (
    <Modal
      open={isOpen}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Fade in={isOpen}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 500,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          outline: 'none',
        }}>
          <Typography id="modal-modal-title" variant="h4" component="h2" gutterBottom mb={6}>
            Новый пост
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Заголовок"
                    variant="outlined"
                    fullWidth
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ""}
                    inputProps={{ maxLength: 30 }}
                  />
                )}
              />
              <Controller
                name="author"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Автор"
                    variant="outlined"
                    fullWidth
                    error={!!errors.author}
                    helperText={errors.author ? errors.author.message : ""}
                    inputProps={{ maxLength: 20 }}
                  />
                )}
              />
              <Controller
                name="views"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Просмотры"
                    variant="outlined"
                    fullWidth
                    type="number"
                    error={!!errors.views}
                    helperText={errors.views ? errors.views.message : ""}
                  />
                )}
              />
              <Controller
                name="likes"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Лайки"
                    variant="outlined"
                    fullWidth
                    type="number"
                    error={!!errors.likes}
                    helperText={errors.likes ? errors.likes.message : ""}
                  />
                )}
              />
              <Controller
                name="comments"
                control={control}
                defaultValue={0}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Комментарии"
                    variant="outlined"
                    fullWidth
                    type="number"
                    error={!!errors.comments}
                    helperText={errors.comments ? errors.comments.message : ""}
                  />
                )}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, gridGap: 10 }}>
                <Button onClick={closeModal} fullWidth color="error" variant="outlined">
                  Отмена
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  color="success"
                  variant="contained"
                  disabled={isSubmitting || !isValid}
                >
                  Отправить
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};
