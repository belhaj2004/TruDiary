//temp comment
import React, {useState, useEffect} from 'react';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';

export function ArticlesList(props) {
    const [email, setEmail] = useState('');
    const [articles, setArticles] = useState([]);
    const URL = 'http://localhost:8080/user/addUser';
    const gURL = 'http://localhost:8080/article/getAllArticles';

    useEffect(() => {
        console.log('hi');
        axios.get(gURL).then((res) => {
            setArticles(res.data);
            console.log(res.data);
        });
        // console.log(events);
    },[]);

    const aList = articles.map(article => {
            // replace option with your component name
            return (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {article.title}
                        </Typography>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {article.author}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {article.description}
                        </Typography>
                        <Link to="/article-reader" state = {{'title':article.title, 'author':article.author, 'content':article.content, 'articleID':article.articleId}}><Button variant="outlined" style={{margin : '15px'}} type = "button">Read this Article</Button></Link>
                    </CardContent>
                </Card>
            );
        }
    );

    return (
        <div style={{margin : '5px'}}>
            <div className = "heading" style={{margin : '5px'}}>
                <h1>Articles</h1>
                {aList}
            </div>
        </div>
    )
}