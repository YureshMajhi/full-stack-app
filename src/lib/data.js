import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore } from "next/cache";

// get all posts
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

// get single post
export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });

    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

//get all users
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};

//get single users
export const getUser = async (id) => {
  unstable_noStore();
  try {
    connectToDb();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};
