import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WhatshotTwoToneIcon from "@mui/icons-material/WhatshotTwoTone";
import { Link } from 'react-router-dom';
import jeevan_banner from '../assets/JEEVAN.gif';

export function Home() {
  const contents = [
    {
      title: "We Finally Know What Drives Chronic Fatigue Syndrome (and Long-Covid)",
      // "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "We Finally Know What Drives Chronic Fatigue Syndrome (and Long-Covid)",
      // "Connect Git to Snowflake, now in Public Preview Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },

    {
      title: "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "Connect Git to Snowflake, now in Public Preview",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
  ];
  return (
    <>
      <div className='home-nav'>
        <p>J Blogs</p>
        <button className='hamburger'></button>
      </div>
      <div className='top-banner'>
        {/* <img src={jeevan_banner} className="banner-img" alt="lll"></img> */}
      </div>
      <div className='search-bar__container'>
        <SearchBar></SearchBar>
      </div>
      <div className='trending__container'>
        <div className='tc__title'>Trending on Blog</div>
        <div className='tc'>
          {contents.map((content, index) => (
            <div className='tc__content_with_num'>
              <div className='tc__index'>0{index}</div>
              <Link to="/view" className="link-style">
                <div className='tc__content'>
                  <h4 className='author'>{content.author}</h4>
                  <h2 className='title'>{content.title}</h2>
                  <div className='tc__time'>
                    <p className='date'>{content.date},</p>
                    {/* <p className='date'>  .</p> */}
                    <p className='duration'>{content.duration} read</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="liner"></div>
      <div className='suggestion__container'>
        <div className='sug__title'>Suggestions for you</div>
        <div className='tc'>
          {contents.map((content, index) => (
            <div className='tc__content_with_num'>
              <div className='tc__index'>0{index}</div>
              <Link to="/view" className="link-style">
                <div className='tc__content'>
                  <h4 className='author'>{content.author}</h4>
                  <h2 className='title'>{content.title}</h2>
                  <div className='tc__time'>
                    <p className='date'>{content.date}</p>
                    <p className='duration'>{content.duration}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>


      </div >
    </>
  );
}
