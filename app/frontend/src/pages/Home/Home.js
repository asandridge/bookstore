const Home = () => {

    const mostPopular = ['book1', 'book2', 'book3', 'book4', 'book5'];
    const mostPopularCovers = mostPopular.map((book) =>
        <span style={{ height: '20vmin', width: '20vmin', border: 'solid 1px' }}>{book}</span>
    );
    const recent = ['book1', 'book2', 'book3', 'book4', 'book5'];
    const recentCovers = recent.map((book) =>
        <span style={{ height: '20vmin', width: '20vmin', border: 'solid 1px' }}>{book}</span>
    );

    return <div>
        <div style={{ margin: '5vmin' }}>
            <h1>Most Popular</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {mostPopularCovers}
            </div>
        </div>
        <div style={{ margin: '5vmin' }}>
            <h1>Recently Added</h1>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                {recentCovers}
            </div>
        </div>
    </div>
}

export default Home;