import React from 'react';
import styles from '../styles/Components/Buttons.module.scss';

/**
 * 
 * @param {Text that will be stay into de button} text 
 * CSS
 *  .button-add-container{
        .button-add-container__button{
            .button-add-container__button--input{
                display: none;
            }
        }
        .button-add-container__button:hover{
        }
        .button-add-container__button:active{
        }
    }
 * @returns 
 */
const LabelButtonForAddFiles = ({text, setStateOfFiles}) => {
  return (
    <div className={styles['button-addFile-container']}>
      <label className={styles['button-addFile-container__button']}>
        <input
          type='file'
          multiple={true}
          className={styles['button-addFile-container__button--input']}
          onChange={(e) => setStateOfFiles(e.target.files)}
        />
        {text}
      </label>
    </div>
  );
};

const PrimaryButton = ({ text, onclic }) => {
  return (
    <div className={styles['button-primary-container']}>
      <button className={styles['button-primary-container__button']} onClick={onclic}>
        {text}
      </button>
    </div>
  );
};
const SecondaryButton = ({ text, onclic, showImage }) => {
  return (
    <div className={styles['button-secondary-container']}>
      <button className={styles['button-secondary-container__button']} onClick={onclic}>
        {text}
      </button>
      {}
    </div>
  );
};

module.exports = {
  LabelButtonForAddFiles,
  PrimaryButton,
  SecondaryButton,
};
