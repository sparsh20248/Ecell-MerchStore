
import Image from "next/image";
import merch_img from "../../public/images/homeMerch.png";
import { useState } from "react";
import styles from "../../styles/shop.module.css";
import { HeartIcon } from "@heroicons/react/solid";
import Link from "next/link";


const Card = (props) => {
    let likeBtn = { width: "20px", height: "20px", color: "white", marginLeft: "250px" }
    const [b_like, setLike] = useState(false);
    function handleChange(event) {
        if (!b_like) {
            props.onLike(props.id);
            setLike(true);
            // likeBtn.color="red";
        }
        else {
            props.unLike(props.id);
            setLike(false);
        }

        event.preventDefault();
    }
    return (
        <div className={styles.product}>
            <div className="flex flex-col">
                <Link href={`/productpage?id=${props.id}`} passHref>
                    <div className="basis-3/5 h-[50px]">
                        <Image src={merch_img} alt=""></Image>
                    </div>
                </Link>
                <div className="basis-2/5 flex flex-row px-[20px] pt-[20px] pb-[30px]">
                    <Link href={`/productpage?id=${props.id}`} passHref>
                        <div className="flex flex-col basis-3/4">
                            <h4 className="text-[20px]" style={{ size: "30px" }}>{props.name}</h4>
                            <p className="text-[17px]" style={{ size: "15px" }}>{props.price} ETOKEN </p>
                        </div>
                    </Link>
                    <div className="flex basis-1/4 justify-items-center">
                        <div className="text-[20px] grid content-start" onClick={() => setLike(!b_like)}>
                            {b_like ? <HeartIcon fill="grey" stroke="grey" className="h-6 w-6 " />
                                : <HeartIcon fill="none" stroke="grey" className="h-6 w-6 " />}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;