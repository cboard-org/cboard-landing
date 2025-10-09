import * as React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';

const BlogPostsPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    if (totalPages <= 1) {
        return null; // Don't show pagination if there's only one page
    }

    return (
      <Box
        display="flex"
        justifyContent="center"
        sx={{ my: 4 }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={onPageChange}
          shape="rounded"
          color="primary"
          size="large"
        />
      </Box>
    );
};

BlogPostsPagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func.isRequired,
};

BlogPostsPagination.defaultProps = {
    currentPage: 1,
    totalPages: 1,
};

export default BlogPostsPagination;
