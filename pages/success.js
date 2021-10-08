import Head from "next/head";
import Image from "next/image";
import { useRef, useState } from "react";
import successStyles from "../styles/Success.module.scss";

const Success = ({ imageUrl }) => {

    // Be sure to add the below code to your next.congig.js to enable 
    // cloudinary routes if you would use next/image.
    // images: {
    //      domains: ['res.cloudinary.com'],
    // }
    
    const textRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const copyUrl = (e) => {
        textRef.current.select();
        document.execCommand('copy');
        e.target.focus();
        setCopied(true);

        setTimeout(() => setCopied(false), 2500);
    }

    return (
        <div className={successStyles.success}>
            <Head>
                <title>Uploaded image</title>
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
                        src={imageUrl}
                        width={350}
                        height={325}
                        alt="uploaded image"
                        priority 
                    />
                    {/* <img src={imageUrl} alt="uploaded image" /> */} 
                </div>
                <div className={successStyles.link}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <textarea ref={textRef}>{imageUrl}</textarea>
                    </form>
                    <button onClick={copyUrl} title="copy link">
                        <i className="fa fa-clone" aria-hidden="true"></i>
                    </button>
                    {copied && (<div className={successStyles.copy}>Copied to clipboard</div>)}
                </div>
            </div>
        </div>
    )
}

success.getInitialProps = async ({ query }) => {
    const { imageUrl } = query;

    return { imageUrl };
}

export default Success;
