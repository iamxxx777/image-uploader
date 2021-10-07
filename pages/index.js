import { useState, useRef, useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import axios from 'axios'

// Components
import Dragdrop from '../components/DragDrop/DragDrop'
import Loading from '../components/Loading/Loading'

import styles from '../styles/Home.module.scss'

export default function Home() {

  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  // For drag and drop
  const handleUpload = (data) => {
    let newFiles = [...files, data];
    setFiles(newFiles);
    submitImage(data[0]);
  }

  // For select images
  const handleChange = (e) => {
    submitImage(e.target.files[0]);
    e.target.value = "";
  }

  const submitImage = async (file) => {

    try {
      let formData = new FormData();
      formData.append("image", file);

      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };

      setIsUploading(true);

      const { data } = await axios.post(`/api/upload`, formData, config);

      setIsUploading(false);

      Router.push(`/success?imageUrl=${data.imageUrl}`, 'success')

    } catch (error) {
      console.log(error);
    }

    
  }

  useEffect(() => {

    /* Add an eventListener to button and make it trigger the click function
    on the input element when it (button) is clicked */

    const handleInput = () => {
      inputRef.current.click();
    }

    let button = buttonRef.current;
    button.addEventListener('click', handleInput);

    return () => button.removeEventListener('click', handleInput);
  });


  return (
    <div className={styles.container}>
      <Head>
        <title>Image uploader</title>
        <meta name="description" content="A webapp for uploading images to the cloud" />
        <meta name="keywords" content="CLOUDINARY, IMAGE, IMAGE UPLOAD, CLOUDINARY IMAGE, UPLOAD IMAGE, CLOUD IMAGE"  />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Head>

      <main className={styles.main}>
        <div className={styles.main_title}>
          <h1>Upload your image</h1>
          <p>File should be Jpeg, Png...</p>
        </div>
        <Dragdrop upload={handleUpload} />
        <div className={styles.file}>
          <p>Or</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <button ref={buttonRef} >Choose a file</button>
            <input ref={inputRef} onChange={handleChange} type="file" name="image" />
          </form>
        </div>
      </main>  
      {isUploading && (<Loading />)}
    </div>
  )
}

// Developed by Dayo-ajobiewe Hope
