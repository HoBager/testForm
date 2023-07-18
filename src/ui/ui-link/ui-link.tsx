import styles from "./ui-link.module.css";

interface CustomLink {
  href?: string;
  text?: string;
}

const CustomLink = ({ href = "#", text = "" }) => {
  return (
    <div className={styles.link}>
      <img src="Folder.png" alt="" />
      <a href={href}>{text}</a>
    </div>
  );
};

export default CustomLink;
