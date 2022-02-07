import Head from 'next/head';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Index.module.scss';
import { LabelButtonForAddFiles, SecondaryButton } from '../components/Buttons';

export default function Home() {
  const [files, setFiles] = useState();

  useEffect(() => {
    console.log('Use Eff', files);
  }, [files]);
  return (
    <>
      <div className={styles['index-container']}>
        <section id='title'>
          <div className={styles['title-container']}>
            <h1 className={styles['title-container__title']}>ToA4</h1>
            {/* <Image
              src='../iamges/send_to_cloud_96px.png/'
              className={styles['title-container__img']}
            /> */}
          </div>
        </section>
        <section id='button-add-container'>
          <LabelButtonForAddFiles text='Add Files' setStateOfFiles={setFiles} />
        </section>
        <section id='files'>
          <div className={styles['files-container']}>
            <ul className={styles['files-container__list']}>
              {files != null
                ? Object.values(files).map((file, index) => {
                    return (
                      <>
                        <li key={`${index}-${file.name}`} className={styles['files-container__list--file']}>{file.name}</li>
                      </>
                    );
                  })
                : ''}
            </ul>
          </div>
        </section>
        <section id='button-add-container'>
          <SecondaryButton text='ToA4' />
        </section>
      </div>
    </>
  );
}
