import { useState } from 'react';
import styles from './App.module.css';
import Div100vh from 'react-div-100vh';
import Modal from './Modal';
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      {modalIsOpen && <Modal onClose={toggleModal} />}
      <div className={styles.wrapper}>
        <div className={styles.menu}>Menu</div>
        <div className={styles.innerWrapper}>
          <h1 className={styles.title}>React 100vh</h1>
          <button className={styles.button} onClick={toggleModal}>
            Open modal
          </button>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            luctus quam. Aenean urna ex, fringilla quis ante ut, vulputate
            accumsan libero. Ut ex arcu, iaculis quis convallis sit amet,
            accumsan ac orci. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Vestibulum ut leo ac ex
            ornare molestie. Morbi quis rhoncus massa. Sed nec euismod mi. Nam a
            tellus pretium, gravida urna non, sagittis felis. Donec et nibh mi.
            Donec non pretium nisi. Vestibulum sollicitudin nisi at orci
            finibus, vitae aliquam tortor laoreet. Integer ultrices neque
            malesuada quam feugiat rhoncus. In hac habitasse platea dictumst.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            luctus quam. Aenean urna ex, fringilla quis ante ut, vulputate
            accumsan libero. Ut ex arcu, iaculis quis convallis sit amet,
            accumsan ac orci. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Vestibulum ut leo ac ex
            ornare molestie. Morbi quis rhoncus massa. Sed nec euismod mi. Nam a
            tellus pretium, gravida urna non, sagittis felis. Donec et nibh mi.
            Donec non pretium nisi. Vestibulum sollicitudin nisi at orci
            finibus, vitae aliquam tortor laoreet. Integer ultrices neque
            malesuada quam feugiat rhoncus. In hac habitasse platea dictumst.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            luctus quam. Aenean urna ex, fringilla quis ante ut, vulputate
            accumsan libero. Ut ex arcu, iaculis quis convallis sit amet,
            accumsan ac orci. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Vestibulum ut leo ac ex
            ornare molestie. Morbi quis rhoncus massa. Sed nec euismod mi. Nam a
            tellus pretium, gravida urna non, sagittis felis. Donec et nibh mi.
            Donec non pretium nisi. Vestibulum sollicitudin nisi at orci
            finibus, vitae aliquam tortor laoreet. Integer ultrices neque
            malesuada quam feugiat rhoncus. In hac habitasse platea dictumst.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            luctus quam. Aenean urna ex, fringilla quis ante ut, vulputate
            accumsan libero. Ut ex arcu, iaculis quis convallis sit amet,
            accumsan ac orci. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Vestibulum ut leo ac ex
            ornare molestie. Morbi quis rhoncus massa. Sed nec euismod mi. Nam a
            tellus pretium, gravida urna non, sagittis felis. Donec et nibh mi.
            Donec non pretium nisi. Vestibulum sollicitudin nisi at orci
            finibus, vitae aliquam tortor laoreet. Integer ultrices neque
            malesuada quam feugiat rhoncus. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
