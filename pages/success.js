import Image from "next/image"
import Head from "next/head";
import Maldives from "../public/maldives.jpg";
import successStyles from "../styles/Success.module.scss";

const success = () => {
    return (
        <div className={successStyles.success}>
            <Head>
                <title>Image uploader</title>
                <meta name="description" content="A webapp for uploading images to the cloud" />
                <meta name="keywords" content="CLOUDINARY, IMAGE, IMAGE UPLOAD, CLOUDINARY IMAGE, UPLOAD IMAGE, CLOUD IMAGE"  />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>
            <div className={successStyles.success_container}>
                <div className={successStyles.success_top}>
                    <div className={successStyles.icon}>
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </div>
                    <h2>Uploaded Successfully</h2>
                </div>
                <div className={successStyles.success_img}>
                    <Image
                        src={Maldives}
                        alt="Successfully uploaded image"
                        priority
                    />
                </div>
                <div className={successStyles.link}>
                    <p>https://www.figma.com/file/NxbZm3CAovYh89dFXe7EOw</p>
                    <button title="copy link">
                        <i className="fa fa-clone" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default success
