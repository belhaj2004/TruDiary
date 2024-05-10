import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import {SignUp} from './pages/Sign-Up';
import {Description} from './pages/Description';
import {Events} from './pages/Events';
import {KnowledgeHub} from './pages/KnowledgeHub';
import {Login} from './pages/Login';
import {MyInfo} from './pages/MyInfo';
import {ArticlesList} from './pages/ArticlesList';
import {ArticleReader} from './pages/ArticleReader';
import { EventNewWrapper } from './pages/EventNewWrapper';
//import { EventReadOnly } from './pages/EventReadOnly';
import { EventReadWrapper } from './pages/EventReadWrapper';
import {SupportGroupsList} from './pages/SupportGroupsList';
import { CookiesProvider, useCookies } from "react-cookie";

// import Login from './Login.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/description" exact element={<Description />}/>
          <Route path="/events" exact element={<EventNewWrapper/>}/>
          <Route path="/knowledge-hub" exact element={<KnowledgeHub />}/>
          <Route path="/support-groups" exact element={<Home />}/>
          <Route path="/eventsread" exact element={<EventReadWrapper/>}/>
          <Route path="/login" exact element={<Login />}/>
          <Route path="/my-info"exact element={<MyInfo />}/>
          <Route path="knowledge-hub/articles-list" exact element={<ArticlesList />}/>
          <Route path="/article-reader" exact element={<ArticleReader />}/>
          <Route path="knowledge-hub/supportGroupsList" exact element={<SupportGroupsList />}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}

export default App;
