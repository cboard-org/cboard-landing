/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BlogMainFeaturedPost from '../BlogMainFeaturedPost';
import BlogFeaturedPost from '../BlogFeaturedPost';
import BlogMain from '../BlogMain';
import BlogPostsPagination from '../BlogPostsPagination';
import useStyles from './blogPostsPreview-style';

export default function BlogPostsPreview(props) {
    const { classes } = useStyles();
    const {
        posts: allPosts,
        announcements: allAnnouncements,
        currentPage = 1,
        postsPerPage = 9,
        totalPages = 1,
        onPageChange
    } = props;
    const [announcements, setAnnouncements] = useState([]);
    const [paginatedPosts, setPaginatedPosts] = useState([]);

    useEffect(() => {
        setAnnouncements(allAnnouncements || []);

        // Calculate pagination
        if (allPosts && allPosts.length > 0) {
            const startIndex = (currentPage - 1) * postsPerPage;
            const endIndex = startIndex + postsPerPage;
            const pagesPosts = allPosts.slice(startIndex, endIndex);
            setPaginatedPosts(pagesPosts);
        } else {
            setPaginatedPosts([]);
        }
    }, [allPosts, allAnnouncements, currentPage, postsPerPage]);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className={classes.body}>
                    {paginatedPosts.length > 0 && (
                        <>
                            <BlogMainFeaturedPost post={paginatedPosts[0]} />
                            <Grid container spacing={4}>
                                {paginatedPosts.slice(1).map((post) => (
                                    <BlogFeaturedPost key={post.slug} post={post} />
                                ))}
                            </Grid>
                        </>
                    )}

                    {/* Pagination positioned between posts and announcements */}
                    {onPageChange && (
                        <BlogPostsPagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={onPageChange}
                        />
                    )}

                    <Grid container spacing={5} className={classes.mainGrid}>
                        <BlogMain title="Announcements" announcements={announcements} />
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}

BlogPostsPreview.propTypes = {
    posts: PropTypes.array.isRequired,
    announcements: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    postsPerPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func,
};

BlogPostsPreview.defaultProps = {
    currentPage: 1,
    postsPerPage: 8,
    totalPages: 1,
    onPageChange: null,
};
