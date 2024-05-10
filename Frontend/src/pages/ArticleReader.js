//temp comment
import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import {useLocation, Link} from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextField from '@mui/material/TextField';
import axios from 'axios';


export function ArticleReader(props) {
    const loc = useLocation();

    const [email, setEmail] = useState('');
    const URL = 'http://localhost:8080/user/addUser';
    const gURL = 'http://localhost:8080/user/getUserByEmail?email=';
    const articleGURL = 'http://localhost:8080/article/getAllArticles';
    const commentPURL = 'http://localhost:8080/comment/addComment';
    const [title, setTitle] = useState(loc.state.title);
    const [author, setAuthor] = useState(loc.state.author);
    const [content, setContent] = useState(loc.state.content);
    const [articleID, setArticleID] = useState(loc.state.articleID);
    const [icon, setIcon] = useState(<FavoriteBorderIcon></FavoriteBorderIcon>);
    const [likeState, setLikeState] = useState('not liked');
    const [commentState, setCommentState] = useState('');
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);

    const commentGURL = 'http://localhost:8080/comment/getArticleComments?articleId=' + articleID;
    console.log('articleId: ' + articleID);
    console.log(loc.state)
    useEffect(() => {
        // console.log('hi');
        axios.get(articleGURL).then((res) => {
            // console.log(res);
            res.data.forEach((article) => {
                // console.log(article.id);
                if (article.id == articleID) {
                    console.log("found");
                    setArticle(article);
                }
            })
        });
        axios.get(commentGURL).then((res) => {
            // console.log(res.data);
            setComments(res.data);
        });

        // console.log(events);
    },[]);

    // console.log(icon);

    const toggleLike = () => {
        if (likeState === 'not liked') {
            setIcon(<FavoriteIcon></FavoriteIcon>);
            setLikeState('liked')
        } else {
            setIcon(<FavoriteBorderIcon></FavoriteBorderIcon>);
            setLikeState('not liked')
        }
    }

    const updateCommentState = (e) => {
        setCommentState(e.target.value);
    }

    const submitComment = (e) => {
        axios.post(commentPURL, {
            text:commentState,
            commenter_id:1,
            article:article
            })
            .then(function (response) {
                if (response.status == 200) {
                    console.log("success");
                }
                console.log(response);
        });
        setCommentState('');
    }
    console.log(comments)

    const cList = comments.map(comment => {
        return (
            <div><p>{comment}</p><br/></div>
        );
        }
    );

    return (
        <div style={{margin : '5px', 'text-align' : 'left'}}>
            <div className = "heading" style={{margin : '5px'}}>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <p>{content}</p>
                <TextField multiline label="Add a comment!" type = "text" value = {commentState} placeholder = "Add a comment!" onChange={evt => updateCommentState(evt)} style={{margin : '5px', width : '50%'}}></TextField>
                <Button onClick={submitComment} style={{width : 'auto'}}>Post your Comment</Button>
                <Button onClick={toggleLike} style={{width : 'auto'}}>{icon}</Button><br/>
                Comments<br/>{cList}<br/>
                <div style={{'text-align' : 'center'}}>
                    <Link to="/knowledge-hub/articles-list"><Button variant="outlined" style={{margin : '15px'}} type = "button">Back to Articles List</Button></Link>
                </div>
            </div>
        </div>
    )
}