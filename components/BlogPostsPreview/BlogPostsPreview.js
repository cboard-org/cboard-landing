import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import BlogMainFeaturedPost from '../BlogMainFeaturedPost';
import BlogFeaturedPost from '../BlogFeaturedPost';
import BlogMain from '../BlogMain';

import useStyles from './blogPostsPreview-style';


const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: '/images/mobile/pilot-timor.jpg',
    imgText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: '/images/mobile/pilot-timor.jpg',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
            image: '/images/mobile/pilot-timor.jpg',
        imageText: 'Image Text',
    },
];

export default function BlogPostsPreview() {
    const { classes } = useStyles();
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            const data1 = await fetch('/locales/en/announcements/blog-post.1.md').then(res => res.text());
            const data2 = await fetch('/locales/en/announcements/blog-post.2.md').then(res => res.text());
            const data3 = await fetch('/locales/en/announcements/blog-post.3.md').then(res => res.text());
            setAnnouncements([data1, data2, data3]);

        }
        fetchContent().catch(console.error);
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className={classes.body}>
                    <BlogMainFeaturedPost post={mainFeaturedPost} />
                    <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <BlogFeaturedPost key={post.title} post={post} />
                        ))}
                    </Grid>
                    <Grid container spacing={5} className={classes.mainGrid}>
                        <BlogMain title="Announcements"  announcements={announcements} />
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}
