import CommentBox from '../components/CommentBox';
import '../styles/BlogView.css';
import profilePic from '../assets/pics.png';
// import { makeStyles } from "@material-ui/core/styles";
// import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@mui/material/IconButton';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
// import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteRounded';
import SideBar from './SideBar';
import { useState } from 'react';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function BlogView() {

    const [openComments, setOpenComments] = useState(false);

    const styles = {
        largeIcon: {

            width: '4vw',
            height: '5vh',
            color: 'red',
            backgroundcolor: 'green',
            borderradius: '100%'
        },
    };

    // const useStyles = makeStyles((theme) => ({
    //     myClassName: {
    //         backgroundColor: "#EFD26E",
    //         position: "relative",
    //         "&:hover": {
    //             backgroundColor: "green"
    //         }
    //     }
    // }));


    // const StyledIconButton = styles(IconButton)(({ theme }) => ({
    //     '&:hover': {
    //         color: theme.palette.secondary.main,  // Change to desired hover color
    //         transform: 'scale(1.2)',  // Slightly increase the size on hover
    //         transition: 'transform 0.3s ease-in-out',
    //     },
    // }));
    return (

        <div className="blog-container">
            {openComments && <SideBar />}
            <div className='bc__nav'>
                <p>J Blogs</p>
                <button className='hamburger'></button>
            </div>
            <div className='bc__title__container'>


                <div className='bc__title'>
                    <h2>
                        TITLE TITEL TITLE TUTLE TUTLE T TITLE TITEL TITLE TUTLE TUTLE T  TITLE TITEL TITLE TUTLE TUTLE T ULTUEUELTELU ETUTLE TUELE
                    </h2>
                </div>
                <div className='bc__title__details'>
                    <div className='btd__details1'>
                        <div className='btd__details1_auth'>
                            <img src={profilePic} alt="fireSpot" className='profilePic' />
                        </div>
                        <div className='btd__details1_duration'>
                            <p className='auth_name'>LORYYYY</p>
                            <p className='time'>12 mins read</p>
                            <p className='posted_time'>⭐ 11/02/2998 ⭐</p>
                        </div>
                    </div>
                    <div className='btd__details2'>
                        <IconButton aria-label="delete" onClick={() => setOpenComments(!openComments)}>
                            <MapsUgcOutlinedIcon />
                        </IconButton>
                        {/* <IconButton color="inherit" className={classes.myClassName}>

                            <FavoriteBorderIcon style={styles.largeIcon} />
                        </IconButton> */}

                    </div>

                </div>
            </div>

            <div className='blog__body'>
                <p>
                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.

                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.

                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.

                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.

                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.

                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.

                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.

                    At times, being at Dartmouth puts pressure on my joy and satisfaction outdoors: I’m surrounded by amazing, outdoorsy people whose skills far exceed mine, sometimes making it hard to avoid feelings of jealous comparison creeping in as I’ve learned in competitive sports. While my friends’ relative ease can be intimidating or invite unfavorable comparison, the reality is that they’ve done these activities for years while I’ve prioritized other things — making any sense of inferiority a bad reason to not enjoy an outing, much less being emblematic of some personal shortcoming.

                    The wonderful thing is that, across many disciplines, I’m at the point where I can keep up with my friends without hurting myself. This baseline capability lets me join the wonderful outdoors community — even if I am not pushing towards the outer limits of skill — and surround myself with fun, encouraging, and inspiring people. This is the perfect zone: enough skill that I can enjoy time with companions and not slow them down too much, but also not so good that I begin to set expectations or compare myself against them. In this way, as a capable novice, I reap the social benefits of being outside without the costs of high-level pursuit.


                </p>
            </div>
            <CommentBox content="hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" author="Jeevan" />


        </div>
    );

}
export default BlogView;