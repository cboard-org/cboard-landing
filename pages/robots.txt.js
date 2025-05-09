export async function getServerSideProps({ res }) {
    res.setHeader('Content-Type', 'text/plain');
    res.write(`User-agent: *
Allow: /
Disallow: /admin/
Disallow: *.qa.cboard.io/
Sitemap: https://www.cboard.io/sitemap.xml`);
    res.end();

    return {
        props: {},
    };
}

export default function Robots() {
    // This will never render on client
    return null;
}
