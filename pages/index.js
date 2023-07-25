import Button from "../components/common/button";
import Accrd from "../components/common/accordion";
import Image from "next/image";
import boxImg from "../public/images/boxImg.png";
import homePic from "../public/images/homeMerch.png";
import styles from "../components/common/button.module.css";
import background from "../public/images/background.png";
import Router from "next/router";
import Link from "next/link";
import { merch } from "../data";
import Card from "../components/shop/Card";

const Index = () => {

    const all_cat = ["Shirt", "Cap", "Jacket"];
    var merchData = [];
    all_cat.map((e) => {
        merch[e].map((f) => {
            merchData.push(f);
        });
    });

    var merchDataSmall = [];
    for(var i = 0 ; i < 6; i++)
        merchDataSmall.push(merchData[i]);

    return (
        <div
            className="container mx-auto bg-fixed"
            style={{
                backgroundImage: `url(${background})`,
                width: "100%",
                height: "100%",
            }}
        >
            <div className="flex flex-col">
                {/* page header */}
                <div className="flex flex-row pt-[110px] pb-[30px] text-left">
                    <div className="flex flex-col basis-1/2">
                        <div className="text-[53px] flex flex-row">
                            <div className="flex flex-col pt-[30px]">
                                Experience the
                                <div className="flex flex-row">
                                    <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-500 pr-[10px]">
                                        {" "}
                                        power{" "}
                                    </div>
                                    <div>of Tokens </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-[24px] py-[50px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc pharetra, phasellus imperdiet fringilla
                            turpis lectus risus erat. Commodo purus, eu sed
                            suspendisse fermentum
                        </div>
                        <div>
                            {/* <Button variant="outlined">Shop Now</Button> */}
                            <Link href="/shop">
                                <a>
                                    <Button
                                        title="Shop Now"
                                        onClick={() => {
                                            console.log("to shop");
                                        }}
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="basis-1/2 flex flex-col">
                        <div
                            className="grid align-items-center justify-items-center"
                            // className={styles.imageWrapper}
                        >
                            <div
                                className={styles.imageWrapper}
                                style={{ zIndex: 5 }}
                            >
                                <Image
                                    src={homePic}
                                    alt=""
                                    style={styles.button}
                                />
                            </div>
                        </div>
                        {/* <div
                        style={{
                            width: "55%",
                            position: "relative",
                            top: "-22%",
                            left: "28%",
                            zIndex: 0,
                            clipPath:
                                "polygon(18% 0, 100% 0, 100% 82%, 82% 100%, 0 100%, 0 18%)",
                            backgroundColor: "#9ca3af",
                        }}
                    > */}
                        <div
                            className="bg-gradient-to-r from-zinc-800 to-voilet-900 w-[55%] text-left text-[25px] px-[25px] pb-[15px] pt-[22%]"
                            style={{
                                position: "relative",
                                top: "-23%",
                                left: "28%",
                                zIndex: 1,
                                clipPath:
                                    "polygon(18% 0, 100% 0, 100% 82%, 82% 100%, 0 100%, 0 18%)",
                                border: "1px solid #9ca3af",
                            }}
                        >
                            <p>
                                <b>Black Jacket</b> <br />
                                52 ETOKENS
                            </p>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                {/* how this works */}
                <div className="flex flex-col pb-[130px]">
                    <div className="text-[53px] flex flex-row py-[40px]">
                        <div className="basis-[55%] text-right pr-[10px]">
                            How this
                        </div>
                        <div className="basis-[45%] text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-500  pr-[10px]">
                            works
                        </div>
                    </div>
                    <div className="flex flex-row text-[24px] text-center ">
                        <div className="basis-1/3 flex flex-col">
                            <div className="my-[5px]">
                                <Image src={boxImg} height={"65%"} alt="" />
                                <h1
                                    style={{
                                        position: "relative",
                                        top: "-55%",
                                    }}
                                >
                                    1
                                </h1>
                            </div>
                            <div>Receive ecell tokens</div>
                            <div className="text-gray-500 text-[18px] text-justify mx-auto px-[18%]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </div>
                        </div>
                        <div className="basis-1/3 flex flex-col">
                            <div className="my-[5px]">
                                <Image src={boxImg} height={"65%"} alt="" />
                                <h1
                                    style={{
                                        position: "relative",
                                        top: "-55%",
                                    }}
                                >
                                    2
                                </h1>
                            </div>
                            <div> Browse for merch </div>
                            <div className="text-gray-500 text-[18px] text-justify mx-auto px-[15%]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </div>
                        </div>
                        <div className="basis-1/3 flex flex-col">
                            <div className="my-[5px]">
                                <Image src={boxImg} height={"65%"} alt="" />
                                <h1
                                    style={{
                                        position: "relative",
                                        top: "-55%",
                                    }}
                                >
                                    3
                                </h1>
                            </div>
                            <div>Buy merch using tokens</div>
                            <div className="text-gray-500 text-[18px] text-justify mx-auto px-[18%]">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </div>
                        </div>
                    </div>
                </div>
                {/* explore the merch */}
                {/* <div className="text-[66px]">Explore the merch</div> */}
                <div className="flex flex-col">
                    <div className="text-[53px] flex flex-row">
                        <div className="basis-[58%] text-right pr-[10px]">
                            Explore the
                        </div>
                        <div className="basis-[42%] text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-500  pr-[10px]">
                            merch
                        </div>
                    </div>
                    <div className="grid grid-rows-2 grid-flow-col gap-8 py-[20px]">
                        {/* insert the cards here */}
                        {merchDataSmall.map(function (pro) {
                        return (
                            <Card key={pro.id} name={pro.name} price={pro.price}
                                image={pro.image} id={pro.id} />);
                    })}
                    </div>
                </div>
                {/* frequently asked */}
                <div className="flex flex-col">
                    <div className="text-[53px] flex flex-row ">
                        <div className="basis-[60%] text-right pr-[10px]">
                            Frequently asked
                        </div>
                        <div className="basis-[40%] text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-500  pr-[10px]">
                            questions
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col basis-1/2">
                            <div className="my-[20px] ml-[15%]">
                                <Accrd
                                    title="How do I earn ETOKENS?"
                                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, phasellus imperdiet fringilla turpis lectus risus erat. Commodo purus, eu sed suspendisse."
                                />
                            </div>
                            <div className="my-[20px] ml-[15%]">
                                <Accrd
                                    title="Some question here"
                                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, phasellus imperdiet fringilla turpis lectus risus erat. Commodo purus, eu sed suspendisse."
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col basis-1/2">
                                <div className="my-[20px] ml-[15%]">
                                    <Accrd
                                        title="How do I earn ETOKENS?"
                                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, phasellus imperdiet fringilla turpis lectus risus erat. Commodo purus, eu sed suspendisse."
                                    />
                                </div>
                                <div className="my-[20px] ml-[15%]">
                                    <Accrd
                                        title="Some question here"
                                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra, phasellus imperdiet fringilla turpis lectus risus erat. Commodo purus, eu sed suspendisse."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
