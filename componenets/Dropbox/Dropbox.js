import Image from 'next/image';
import dropImg from '../../public/image.svg';
import dropStyles from '../../styles/Dropbox.module.scss';

const Dropbox = () => {
    return (
        <div className={dropStyles.dropbox}>
            <div className={dropStyles.drop_img}>
                <Image 
                    src={dropImg}
                    alt="drop image placeholder"
                    priority
                />
            </div>
            <div className={dropStyles.drop_text}>
                <p>Drag & Drop your image here</p>
            </div>
        </div>
    )
}

export default Dropbox
