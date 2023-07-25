import Image from "next/image";
import MerchPic from "../public/images/homeMerch.png";
import userImage from "../public/images/user.jpg";
import Button from "../components/common/button";
import styles from "../components/common/userPic.module.css";
import React, { useRef, useState } from "react";
import Card from "../components/shop/Card";
import styles2 from "../components/common/button.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Router, useRouter } from "next/router";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { merch } from "../data";
// import required modules
import { Pagination, Navigation } from "swiper";

function handler(product) {

    var cart = JSON.parse(localStorage.getItem("cart_data"));
    console.log(cart);

    if (cart == null) {
        cart = [];
        cart.push({ item: product, quantity: 1 })
    }
    else {
        var e, flag = false;
        for (var i = 0; i < cart.length; i++) {
            e = cart[i]
            if (e.item.id == product.id) {
                e.quantity += 1;
                flag = true;
                break;
            }

        }
        if (!flag) { cart.push({ item: product, quantity: 1 }) }
    }
    localStorage.setItem("cart_data", JSON.stringify(cart));
}
const ProductPage = () => {
    const { query: selectedMerchId } = useRouter();
    const { id: item_number } = selectedMerchId;
    console.log(item_number);
    var product;
    var merchData = [];
    const all_cat = ["Shirt", "Cap", "Jacket"];
    all_cat.map((e) => {
        merch[e].map((f) => {
            if (f.id == item_number) {
                product = f;
            }
            merchData.push(f);
        });
    });
    // return (
    //     <div>
    //         {product.name};
    //         HELLO
    //     </div>
    // );
    return (
        <>
            <div className="container mx-auto">
                <div className="flex flex-row pt-[30px] pb-[100px] text-left">
                    <div className="flex flex-row justify-between">
                        <div
                            className={styles2.imageWrapper}
                            style={{ zIndex: 5 }}
                        >
                            <Image src={MerchPic} alt="about" />
                        </div>
                        <div className="w-1/2 flex justify-start items-center text-xl">
                            <div className="flex flex-col pt-[10px] pb-[50px]">
                                <p className="text-5xl">{product.name}</p>
                                <div className="text-2xl my-4">{product.price} ETKOEN</div>
                                <div className="flex flex-row pt-[20px]">
                                    <div style={{ borderRadius: '50px', overflow: 'hidden', height: 40, width: 40 }}>
                                        <Image src={userImage} objectFit="cover" height={40} width={40} />
                                    </div>
                                    <div className="ml-4 text-gray-400" >@username</div>
                                </div>
                                <div className="text-gray-500 pt-[20px] pb-[30px]  ">
                                    {product.about}
                                </div>
                                <div>
                                    {/* <Button variant="outlined">Shop Now</Button> */}
                                    <Button
                                        title="Add item to cart"
                                        onClick={() => {
                                            handler(product)

                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-[53px] flex flex-row">
                        <div className="flex flex-col pt-[30px] pb-[50px]">
                            <div className="flex flex-row">
                                <div>Explore </div>
                                <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-indigo-500 pl-[15px] pr-[10px]">
                                    more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="pl-[150px] pr-[150px]">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        loopFillGroupWithBlank={true}
                        // margin={0}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper bg-transparent"
                    >
                        {merchData.map(function (pro, key) {
                            return (
                                <SwiperSlide key={pro.id} style={{ background: "black" }}>
                                    <Card name={pro.name} price={pro.price}
                                        image={pro.image} id={pro.id} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
