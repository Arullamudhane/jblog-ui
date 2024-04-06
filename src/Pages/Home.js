import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WhatshotTwoToneIcon from "@mui/icons-material/WhatshotTwoTone";

export function Home() {
  const contents = [
    {
      title: "TIT TIT TIT1",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "TIT TIT TIT1",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "TIT TIT TIT1",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "TIT TIT TIT1",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },
    {
      title: "TIT TIT TIT1",
      date: "2 Jan 2023",
      duration: "20 mins",
      author: "jeevqn",
    },

    {
      title: "TIT TIT TIT1",
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
      <div className='top-banner'></div>
      <div className='search-bar__container'>
        <SearchBar></SearchBar>
      </div>
      <div className='trending__container'>
        <div className='tc__title'>Trending on Blog</div>
        <div className='tc'>
          {contents.map((content, index) => (
            <div className='tc__content_with_num'>
              {index}
              <div className='tc__content'>
                <h4>{content.author}</h4>
                <h2>{content.title}</h2>
                <div className='tc__time'>
                  <p>{content.date}</p>
                  <p>{content.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='suggestion__container'></div>
    </>
  );
}
