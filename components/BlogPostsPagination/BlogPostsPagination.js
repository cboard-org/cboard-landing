import * as React from 'react';
import PropTypes from 'prop-types';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BlogPostsPagination = ({
    currentPage = 1,
    totalPages = 1,
    onPageChange,
}) => {
    if (totalPages <= 1) {
        return null; // Don't show pagination if there's only one page
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(null, currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(null, currentPage + 1);
        }
    };

    return (
      <Box sx={{ my: { xs: 3, md: 4 } }}>
        {/* Navigation buttons */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: { xs: 2, md: 3 },
            px: { xs: 1, md: 2 },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 }
          }}
        >
          <Button
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            onClick={handlePrevious}
            disabled={currentPage === 1}
            sx={{
              minWidth: { xs: '100px', sm: '120px' },
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}
          >
            Previous
          </Button>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              order: { xs: -1, sm: 0 },
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 500
            }}
          >
            Page
            {currentPage}
            {' '}
            of
            {totalPages}
          </Typography>

          <Button
            variant="outlined"
            endIcon={<ArrowForwardIosIcon />}
            onClick={handleNext}
            disabled={currentPage === totalPages}
            sx={{
              minWidth: { xs: '100px', sm: '120px' },
              fontSize: { xs: '0.875rem', md: '1rem' }
            }}
          >
            Next
          </Button>
        </Box>

        {/* Pagination dots */}
        <Box
          display="flex"
          justifyContent="center"
        >
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={onPageChange}
            shape="rounded"
            color="primary"
            size="large"
            showFirstButton={totalPages > 3}
            showLastButton={totalPages > 3}
            siblingCount={1}
            boundaryCount={1}
          />
        </Box>
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
