import React, { useState, useEffect } from "react";
import Image from "next/image"
import userImage from "../public/images/user.jpg";


//props has 2 thinngs 1. user data which would contain the amount of coins the user has
//                    2. A list of initial incart items which have - itemId (a unique identifer)
//                                                                 - itemName
//                                                                 - itemPrice
//                                                                 - initialItemQuantity
//                                                                 - itemImage (link to the png file)

const CartPage = () => {
    var cart_data = []
    const [cart, setCart] = useState(cart_data);
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart_data")));
    }, [])


    // the below variable is just there for testing
    // let props = {
    //     userData: {
    //         balance: 100,
    //     },
    //     incartItems: [
    //         {
    //             id: 1,
    //             name: "BlackCap",
    //             price: 10,
    //             itemQuantity: 2,
    //             image: "https://i.imgur.com/u5IfxoU.png",
    //         },
    //         {
    //             itemID: 2,
    //             itemName: "BlackCap",
    //             itemPrice: 10,
    //             itemQuantity: 2,
    //             itemImage: "https://i.imgur.com/u5IfxoU.png",
    //         },
    //         {
    //             itemID: 3,
    //             itemName: "BlackCap",
    //             itemPrice: 10,
    //             itemQuantity: 2,
    //             itemImage: "https://i.imgur.com/u5IfxoU.png",
    //         },
    //     ],
    // };

    if (typeof window !== 'undefined') {
        cart_data = JSON.parse(localStorage.getItem("cart_data"));;
    }

    console.log(cart_data)


    return (
        <>
            <div className="mx-auto container bg-black h-[100vh]">
                {cart.map((item, index) => {
                    return (
                        <CartUiCard
                            // userCoins={props.userData.coins}
                            cart={cart}
                            setCart={setCart}
                            item={item}
                            key={index}
                        />
                    );
                })}
            </div>
        </>
    );
};
const CartUiCard = (props) => {
    function updateQuantity(change) {
        props.item.quantity += change;
        if (props.item.quantity <= 0) {
            props.setCart(
                props.cart.filter((e) => e.item.id !== props.item.item.id)
            );
            return;
        }
        props.cart.map((cartItem, index) => {
            if (cartItem.item.id === props.item.item.id) {
                cartItem.quantity = props.item.quantity;
            }
        });

        props.setCart([...props.cart]);
    }

    function checkAddAnotherItem() {
        props.cart.map((cartItem, index) => {
            if (
                (cartItem.quantity + 1) * cartItem.item.price >
                props.balance
            ) {
            }
        });
    }
    return (
        <>
            <div className="my-8 grid grid-cols-1  lg:grid-cols-5  ui-cart-gradients">
                <div className="p-4 text-white relative">
                    <div className="h-full w-auto testimg-img img-cut mx-auto my-0 top-1/2">
                        {" "}
                        <Image
                            src={userImage}
                            alt=""
                        // layout='fill'
                        />{" "}
                    </div>
                </div>
                <div className="p-4 text-white font-semibold text-center">
                    {props.item.item.name}
                </div>
                <div className="p-4 text-white text-center">
                    {props.item.item.price} Eth
                </div>
                <div className="p-4 text-white text-center">
                    <div
                        onClick={() => {
                            updateQuantity(-1);
                        }}
                        className="inline-block cursor-pointer bg-violet-500 w-7 h-7 pb-1 "
                    >
                        -
                    </div>
                    <div className="inline-block shadow-inner px-5 ">
                        {props.item.quantity}
                    </div>
                    <div
                        onClick={() => {
                            updateQuantity(1);
                        }}
                        id="increase-qty-btn"
                        className=" inline-block cursor-pointer btn-cut bg-blue-400 pb-1 w-7 h-7 "
                    >
                        +
                    </div>
                </div>
                <div className="p-4 text-white text-center">
                    {props.item.item.price * props.item.quantity} Etoken
                </div>
            </div>
        </>
    );
};
export default CartPage;
