import union from '../../assets/images/icons/union.svg'
import magic from '../../assets/images/icons/magic.svg'
import BannerUpdateCard from '../cards/card';
const Banner = () => {
    return (
        <div className="banner">
            <div>
                <button className="banner-inroducing">
                    <img src={union} alt="icon" />
                    Introducing Image Feature
                </button>
                <h1 className='banner-title'>Image with Serendipity</h1>
                <p className='banner-desc'>
                    Discover a vibrant community of creators on Serendipity! Connect with thousands of like-minded individuals on Discord or the web and unleash your imagination through collaborative storytelling. From vivid worlds to unforgettable characters, bring your short text descriptions to life in new and exciting ways. Join Serendipity today and embark on a journey of endless creativity!
                </p>
                <div className='banner-generate'>
                    <button>
                        <img src={magic} alt="icon" />
                        Generate Images
                    </button>
                </div>
            </div>
            <BannerUpdateCard />
        </div>
    );
}

export default Banner;