export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'UPDATE':
        case 'LIKE':
            console.log('Updating post with ID:', action.payload._id);
            return posts.map((post) => 
                (post._id === action.payload._id ? action.payload : post)
        );

        case 'CREATE':
            return [...posts, action.payload];

        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);

        default:
            return posts;
    }
}