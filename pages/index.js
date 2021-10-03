import Head from 'next/head'

// Components
import Dropbox from '../components/Dropbox/Dropbox'

import styles from '../styles/Home.module.scss'

export default function Home() {
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
        <Dropbox />
        <div className={styles.file}>
          <p>Or</p>
          <form>
            <button>Choose a file</button>
            <input type="file" name="image" />
          </form>
        </div>
      </main>  
    </div>
  )
}
