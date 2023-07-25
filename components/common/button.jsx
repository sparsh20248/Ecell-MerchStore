import styles from "./button.module.css";
const Button = (props) => {
    return (
        <div
            //className="py-[12px] w-[${props.width}] px-[35px] bg-gradient-to-r from-purple-500 to-indigo-500"
            onClick={props.onClick}
            className={styles.button}
        >
            {props.title}
        </div>
    );
};
export default Button;
