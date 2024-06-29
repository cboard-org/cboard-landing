import * as React from 'react';
import Pagination from '@mui/material/Pagination';

const BlogPostsPagination = ({
    pagination,
    basePath = "/?page=",
    numSiblingPages = 2,
}) => {
    return (
        
      <Pagination count={10} shape="rounded" />
    );
};

export default BlogPostsPagination;