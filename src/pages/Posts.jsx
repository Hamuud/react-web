import React, {useEffect, useState} from 'react';
import {useFetching} from "../components/hooks/useFetching";
import {usePosts} from "../components/hooks/usePosts";
import PostService from "../API/PostService";
import MyButton from "../components/UI/Button's/button/MyButton";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import Pagination from "../components/pagination/Pagination";
import MyModal from "../components/UI/MyModal/MyModal";
import Loader from "../components/UI/Loader/Loader";
import getPagesCount from "../utils/pages";
import Random from "../components/Random";
function Posts() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query:''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages ] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query)
    const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount =response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts( limit, page)
    },[]  )

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page);
    }

    return (
        <div className="App">
            <MyButton style = {{marginTop: 15}} onClick={ () => setModal(true)}>Create Post</MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm  create = {createPost}/>
            </MyModal>
            <Random/>
            <hr style = {{margin: '10px 0', color: '#B1B7BA'}}/>
            <PostFilter
                filter = {filter}
                setFilter = {setFilter}
            />
            {postError &&
                <h1> Ahh shit, here we go again ${postError}</h1>
            }


            {isPostsLoading
                ? <div style = {{display: 'flex', justifyContent: 'center', marginTop: 200}}> <Loader/> </div>
                : <PostList remove = {removePost} posts={sortedAndSearchedPosts} title = "POST LIST"/>
            }

            <Pagination
                page = {page}
                changePage = {changePage}
                totalPages = {totalPages}
            />
        </div>
    );
}

export default Posts;
