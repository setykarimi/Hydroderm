import img from '../../assets/images/usingDiscord.png'
const CardSection = () => {
    return (
        <div className='cards-sections'>
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardSection;

const Card = () => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="card_details">
                <h3 className="card_details-title">Using Discord</h3>
                <div className="card_details_desc">
                    <span className="card_details_desc-title">Mastering the Art of Prompt Writing</span>
                    <p className="card_details_desc-detail">
                    Prompt writing involves crafting clear and engaging prompts, while using images to create a visual representation of the idea or concept.
                    </p>
                </div>

                <button className="card_button">Join Discord</button>
            </div>
        </div>
    )
}