import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import BlogMainFeaturedPost from '../BlogMainFeaturedPost';
import BlogFeaturedPost from '../BlogFeaturedPost';
import BlogMain from '../BlogMain';
import useStyles from './blogPostsPreview-style';

export default function BlogPostsPreview(props) {
    const { classes } = useStyles();
    const [announcements, setAnnouncements] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        var posts = props.posts;
        setPosts(posts);
        var announcements = props.announcements;
        setAnnouncements(announcements);
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className={classes.body}>
                    {!!posts[0] && <BlogMainFeaturedPost post={posts[0]} />}
                    <Grid container spacing={4}>
                        {posts.slice(1, 9).map((post) => (
                            <BlogFeaturedPost key={post.slug} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <BlogMain title="Announcements" announcements={announcements} />
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}
