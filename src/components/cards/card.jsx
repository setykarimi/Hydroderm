import upload from '../../assets/images/icons/upload.svg'
import permutation from '../../assets/images/icons/permutation.svg'
import status from '../../assets/images/icons/status.svg'
import release from '../../assets/images/icons/release.svg'
import linked from '../../assets/images/icons/linked.svg'

const BannerUpdateCard = () => {
    const cardItems = [
        {
            icon: upload,
            title: "Upload Image",
            desc: "New Feature - Apr 30, 2023"
        },
        {
            icon: permutation,
            title: "Permutation",
            desc: "New Feature - Apr 21, 2023"
        },
        {
            icon: status,
            title: "Status Page",
            desc: "New content - Apr 16, 2023"
        },
        {
            icon: release,
            title: "V2.1 Release",
            desc: "New Release - Apr 15, 2023"
        },
        {
            icon: linked,
            title: "Linked Roles",
            desc: "New Feature - Apr 10, 2023"
        },
    ]
    return (
        <div className="card-update">
            <h2 className="card-update_title">Updates</h2>

            {cardItems.map(({icon, title, desc})=> (
                <div className='card-update_items'>
                    <div className="icon">
                        <img src={icon} alt={title} />
                    </div>
                    <div className="desc">
                        <span className="desc-title">{title}</span>
                        <p className="desc-detail">{desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BannerUpdateCard;