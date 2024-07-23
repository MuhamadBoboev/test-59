import React, { useState } from 'react';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, CircularProgress, Alert, Box } from '@mui/material';
import { useQuery, useMutation } from 'react-query';
import { deleteQuery, getQuery, queryClient } from "@shared/api";
import toast from "react-hot-toast";
import { IItem } from '../model';

interface Column {
  id: 'id' | 'title' | 'author' | 'views' | 'likes' | 'comments' | 'actions';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const allColumns: readonly Column[] = [
  { id: 'id', label: 'ID', minWidth: 20 },
  { id: 'title', label: 'Заголовок', minWidth: 170 },
  { id: 'author', label: 'Автор', minWidth: 100 },
  { id: 'views', label: 'Просмотры', minWidth: 100, align: 'right' },
  { id: 'likes', label: 'Лайки', minWidth: 100, align: 'right' },
  { id: 'comments', label: 'Комментарии', minWidth: 100, align: 'right' },
  { id: 'actions', label: 'Действия', minWidth: 100, align: 'right' },
];

export const MainTable: React.FC = () => {
  const { data, isError, isLoading } = useQuery('posts', getQuery<IItem[]>('posts'));
  const deleteMutation = useMutation((id: number) => deleteQuery(`posts/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
      toast.success("Пост успешно удален");
    },
    onError: () => {
      toast.error("Не удалось удалить пост");
    }
  });

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">Ошибка загрузки данных</Alert>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="warning">Данные отсутствуют</Alert>
      </Box>
    );
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', padding: '16px' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {allColumns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                {allColumns.map((column) => {
                  const value = column.id === 'actions' 
                    ? <Button variant="contained" color="error" onClick={() => handleDelete(row.id)}>Удалить</Button>
                    : row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
