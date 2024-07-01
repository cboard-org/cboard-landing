import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import parseMD from 'parse-md'

import BlogMainFeaturedPost from '../BlogMainFeaturedPost';
import BlogFeaturedPost from '../BlogFeaturedPost';
import BlogMain from '../BlogMain';

import useStyles from './blogPostsPreview-style';

export default function BlogPostsPreview() {
    const { classes } = useStyles();
    const [announcements, setAnnouncements] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            var posts = [];
            const postsFileNames = await fetch('/locales/en/posts/postsFileNames.json').then(res => res.json());
            postsFileNames.postsFiles.slice().reverse().forEach(async (filename) => {
                const post = await fetch('/locales/en/posts/' + filename.name).then(res => res.text());
                const { metadata, content } = parseMD(post);
                posts.push({ metadata, content });
            });
            setPosts(posts);
            const data1 = await fetch('/locales/en/announcements/blog-post.1.md').then(res => res.text());
            const data2 = await fetch('/locales/en/announcements/blog-post.2.md').then(res => res.text());
            const data3 = await fetch('/locales/en/announcements/blog-post.3.md').then(res => res.text());
            setAnnouncements([data1, data2, data3]);
        };
        fetchContent().catch(console.error);
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className={classes.body}>
                   {!!posts[0] && <BlogMainFeaturedPost post={posts[0]} />}
                    <Grid container spacing={4}>
                        {posts.slice(1,9).map((post) => (
                            <BlogFeaturedPost key={post.metadata.date.getTime()} post={post} />
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
