import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const CustomEditor = dynamic(() => import('../components/custom-editor'), {
  ssr: false,
});

const Home = () => {
  const [content, setContent] = useState('');
  return (
    <div className={styles.container}>
      <Head>
        <title>Editor JS Rich Text </title>
        <meta name='description' content='Editor Js in Next JS' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.heading}>
          <h1>Editor Js Rich Text Editor</h1>
        </div>

        <CustomEditor setContent={setContent} content={content} />

        <button className='save_btn' onClick={() => console.log(content)}>
          Save
        </button>
      </main>
    </div>
  );
};

export default Home;
