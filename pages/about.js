import Image from "next/image";
import AboutImg from "../public/svg/about.svg";
import boxImg from "../public/images/boxImg.png";
import Accrd from "../components/common/accordion";
import { AtSymbolIcon } from "@heroicons/react/solid";
import { LocationMarkerIcon } from "@heroicons/react/outline";
import Button from "../components/common/button";

const AboutPage = () => {
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-[47.34px] text-center">About</h1>
                <div className="flex flex-row justify-between">
                    <div className="w-1/2 flex justify-start items-center text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc pharetra, phasellus imperdiet fringilla turpis
                        lectus risus erat. Commodo purus, eu sed suspendisse
                        fermentum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nunc pharetra, phasellus imperdiet
                        fringilla turpis lectus risus erat. Commodo purus, eu
                        sed suspendisse fermentum
                    </div>
                    <div>
                        <Image src={AboutImg} alt="about" />
                    </div>
                </div>
                <div className="flex flex-col pb-[130px]">
                    <div className="text-[53px] flex flex-row py-[40px]">
                        <div className="basis-[55%] text-right pr-[10px]">
                            How this
                        </div>
                        <div className="basis-[45%] text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-500  pr-[10px]">
                            works
                        </div>
                    </div>
                    <div className="flex flex-row text-[24px] text-center">
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
                <div>
                    <div className="text-[53px] flex flex-row ">
                        <div className="basis-[60%] text-right pr-[10px]">
                            Contact
                        </div>
                        <div className="basis-[40%] text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-500  pr-[10px]">
                            us
                        </div>
                    </div>
                    <div className="flex flex-row justify-between my-10">
                        <div className="flex flex-row justify-center items-center">
                            <div className="flex flex-col space-y-10 -mt-10 mr-3">
                                <p>
                                    <AtSymbolIcon className="w-5 h-5" />
                                </p>
                                <p>
                                    <LocationMarkerIcon className="w-5 h-5" />
                                </p>
                            </div>
                            <div className="flex flex-col space-y-10 w-1/2">
                                <p>someemail@gmail.com</p>
                                <p>
                                    Something somewhere, street name, locality
                                    city name
                                </p>
                            </div>
                        </div>
                        <div>
                            <form>
                                <div className="flex flex-row justify-between m-3">
                                    <div className="w-1/2 mr-3">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-lg"
                                        />
                                    </div>
                                    <div className="w-1/2 ml-3">
                                        <input
                                            type="tel"
                                            placeholder="Phone"
                                            className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="m-3">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-lg"
                                    />
                                </div>
                                <div className="m-3">
                                    <textarea
                                        placeholder="Message"
                                        className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-row justify-between m-3">
                                    <div className="">
                                        <Button
                                            title="Send Message"
                                            onClick={() => {
                                                console.log("Submit Message");
                                            }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
        </>
    );
};

export default AboutPage;
