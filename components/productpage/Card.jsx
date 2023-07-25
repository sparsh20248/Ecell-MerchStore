import Image from "next/image";
import mech_pic from "../../public/images/download.jpg"
import styles from "../productpage/card.module.css";


const Card = () => {
    return (
        <div className="basis-1/2 flex flex-col"
        // onClick={}
        >
            <div
                className="grid align-items-center justify-items-center"
            >
                <div
                    className={styles.imageWrapper}
                    style={{ zIndex: 5 }}
                >
                    <Image src={mech_pic} alt="" style={styles.button} />
                </div>
                <div
                    className="bg-gradient-to-r from-zinc-800 to-voilet-900 w-[55%] text-left text-[25px] px-[25px] pb-[15px] pt-[22%]"
                    style={{
                        position: "relative",
                        height: "120px",
                        width: "200px",
                        top: "-23%",
                        left: "17%",
                        zIndex: 1,
                        clipPath:
                            "polygon(18% 0, 100% 0, 100% 82%, 82% 100%, 0 100%, 0 18%)",
                        border: "1px solid #9ca3af",
                    }}
                >
                    <p style={{ "font-size": "15px", color: "white" }}>
                        <b style={{ "font-size": "20px" }}>Black Jacket</b> <br />
                        52 ETOKENS
                    </p>
                </div>
            </div>


            {/* </div> */}
        </div>
    );
}





export default Card;