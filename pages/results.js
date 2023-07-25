import Card from "../components/shop/Card";
// import Example from "../components/shop/Dropdown";
// import styles from "../styles/Card.module.css";
import { Router, useRouter } from "next/router";
import { merch } from "../data";
const all_cat = ["Shirt", "Cap", "Jacket"];

const Results = () => {
    const { query: titles } = useRouter();
    const { title: search } = titles;
    // var temp_obj = {
    //     name:"",
    //     price:0
    // }
    // const merch = [];
    // function add_merch(name, price){
    //     temp_obj.name=name;
    //     temp_obj.price= price;
    //     merch.push(temp_obj);
    // }

    // const Results = bookCategory
    //     .filter((x) => x.rating >= rating)
    //     .filter((x) => x.price > priceMin)
    //     .filter((x) => x.price <= priceMax);

    console.log(merch);
    console.log(search.toLowerCase());
    var merchData = [];
    all_cat.map((e) => {
        merch[e].map((f) => {
            //console.log(f);
            if (f != []) {
                // console.log(f.name);

                if (f.name.toLowerCase().includes(search.toLowerCase())) {
                    merchData.push(f);
                }
            }
        });
    });

    console.log(merchData);
    function proLike(i) {
        console.log("tru");
        product.forEach(function (check) {
            if (check.id === i) {
                check.like = check.like + 1;
            }
        })
    }
    function liKe(i) {
        product.forEach(function (check) {
            if (check.id === i) {
                check.like = check.like - 1;
            }
        })
    }
    return (
        <div className="container mx-auto h-[100vh] w-[100vw]">
            <div>
                <div className="text-4xl py-[20px]">
                    search result for keyword:{" "}
                    <mark className="text-cyan-700 bg-transparent"> {search}</mark>
                </div>
                <div>
                    <div className="flex flex-col">
                        <div className="bg-black place-items-center grid grid-cols-3 gap-4 flex flex-col">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bg-black place-items-center grid grid-cols-3 gap-4 flex flex-col">

                    {/* {product.map((Card, key) => (<Card key={key} name />))} */}
                    {
                    (merchData.length === 0)? <div className="text-[30px] text-cyan-700">No results found</div>:
                    merchData.map(function (pro) {
                        return (
                            <Card key={pro.id} name={pro.name} price={pro.price}
                                image={pro.image} onLike={proLike} unLike={liKe} id={pro.id}/>);
                    })}

                </div>

            </div>
        </div>
    );
};

export default Results;
