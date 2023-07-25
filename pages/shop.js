import Card from "../components/shop/Card";
import styles from "../styles/shop.module.css"
import { MyDropdown1, MyDropdown3, MyDropdown2 } from "../components/shop/Dropdown"
import { merch } from "../data";

const all_cat = ["Shirt", "Cap", "Jacket"];
var merchData = [];
all_cat.map((e) => {
    merch[e].map((f) => {
        merchData.push(f);
    });
});
const ShopPage = () => {
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
        <div className="container mx-auto min-h-[100vh] min-w-[100vw] bg-fixed pb-[20px]">
            <div style={{ textAlign: "center" }}>
                <h1 className={styles.head}>Explore the merch</h1>
            </div>

            <div className="place-items-center grid grid-cols-3 gap-4" style={{ margin: "30px 0", alignItems: "center" }}>
                <div>
                    <MyDropdown1 className={styles.drp} style={{ zIndex: 10 }} />
                </div>
                <div>
                    <MyDropdown2 className={styles.drp} style={{ zIndex: 10 }} />
                </div>
                <div>
                    <MyDropdown3 className={styles.drp} style={{ zIndex: 10 }} />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="bg-black place-items-center grid grid-cols-3 gap-4 flex flex-col">

                    {/* {product.map((Card, key) => (<Card key={key} name />))} */}
                    {merchData.map(function (pro) {
                        return (
                            <Card key={pro.id} name={pro.name} price={pro.price}
                                image={pro.image} onLike={proLike} unLike={liKe} id={pro.id} />);
                    })}

                </div>

            </div>
        </div>
    )
};

export default ShopPage;