import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from '@mui/icons-material';
import { Button, Grid, Link, Stack, Typography } from '@mui/material';

const columns = [
  { id: 'title', label: 'Title', minWidth: 170 },
  { id: 'category', label: 'Category', minWidth: 100 },
  {
    id: 'donated',
    label: 'Donated',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'raised',
    label: 'Raised',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'modify',
    label: 'Edit | Delete',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(title, category, donated, raised, modify) {
  // const density = population / size;
  return { title, category, donated, raised, modify };
}

const title = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
const options = <>
                  <Stack direction="row">
                    <Button>
                      <Edit />
                    </Button>
                  <Typography> | </Typography>
                  <Button>
                    <DeleteIcon />
                  </Button>
                  </Stack>
                </>
const rows = [
  createData(title, 'IN', 1324171354, 3287263, options),
  // createData(title, 'CN', 1403500365, 9596961),
  // createData(title, 'IT', 60483973, 301340),
  // createData(title, 'US', 327167434, 9833520),
  // createData(title, 'CA', 37602103, 9984670),
  // createData(title, 'AU', 25475400, 7692024),
  // createData(title, 'DE', 83019200, 357578),
  // createData(title, 'IE', 4857000, 70273),
  // createData(title, 'MX', 126577691, 1972550),
  // createData(title, 'JP', 126317000, 377973),
  // createData(title, 'FR', 67022000, 640679),
  // createData(title, 'GB', 67545757, 242495),
  // createData(title, 'RU', 146793744, 17098246),
  // createData(title, 'NG', 200962417, 923768),
  // createData(title, 'BR', 210147125, 8515767),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}