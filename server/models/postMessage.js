import mongoose from 'mongoose';

// Creating a new schema using Mongoose
const postSchema = mongoose.Schema ({
    title: String,
    message: String,
    creator: String,
    tags: [String],              // Array of strings for multiple tags
    selectedFile: String,        // Can contain URL to a picture or file path
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// Using the schema to create a new model called PostMessage which creates a collection 'postmessages' in MongoDB
// (Mongoose automatically lowercases and pluralizes the name for collection)
const PostMessage = mongoose.model ('PostMessage', postSchema);

export default PostMessage;