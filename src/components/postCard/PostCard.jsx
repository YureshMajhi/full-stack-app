import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18408920/pexels-photo-18408920/free-photo-of-colonnade-decorated-with-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2020</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique non
          distinctio adipisci molestiae beatae, laborum repellat aut odit totam
          rem quae amet ipsa eius doloribus alias maxime nostrum mollitia harum?
        </p>
        <Link href={"/blog/post"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
