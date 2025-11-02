import exploreTitle from "../../../shared/assets/img/explore-title.webp";
import exploreOne from "../../../shared/assets/img/explore-1.webp";
import exploreTwo from "../../../shared/assets/img/explore-2.webp";
import exploreThree from "../../../shared/assets/img/explore-3.webp";
import exploreFour from "../../../shared/assets/img/explore-4.webp";
import Button from "../../../shared/ui/Button/Button";
export function ExplorePage() {
    const exploreItems = [
        { img: exploreOne, title: "Explore Dance", topPosition: "40%" },
        { img: exploreTwo, title: "Explore Cinema", topPosition: "45%" },
        { img: exploreThree, title: "Explore Lunch", topPosition: "35%" },
        { img: exploreFour, title: "Explore Coffee", topPosition: "45%" },
    ];

    return (
        <div className="min-h-screen w-full pt-12 px-2">
            <div className="relative pt-1.5 pb-1.5">
                <img className="w-full" src={exploreTitle} alt="Explore Title" />
                <div className="absolute bottom-0 flex flex-col gap-15 w-full">
                    <h1 className="text-white mt-0 mb-0 text-[28px] font-bold leading-7 pl-2.5 pr-2.5">Get photo verified</h1>
                    <div className="flex justify-between items-center px-2 bg-linear-to-b from-transparent to-[#000000] rounded-b-[11px] pb-3">
                        <div className="flex flex-col">
                            <span className="text-white text-[17px] font-bold leading-[22px]">Get verified on Tinder</span>
                            <span className="text-[#B9BFC8] text-[15px] font-bold leading-5">Photo verified</span>
                        </div>
                        <div className="flex justify-end">
                            <Button type="white">TRY NOW</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-1 my-1 ">
                <p className="text-[#E9EBEE] text-[17px] font-bold leading-[22px]">Welcome to Explore</p>
                <span className="text-[#939BA7] text-[15px] font-medium leading-5">My vibe …</span>
            </div>
            <div className="grid grid-cols-2">
                {exploreItems.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div key={index} className={`relative py-1 ${isLeft ? "pr-1" : "pl-1"}`}>
                            <img className="w-full rounded-lg" src={item.img} alt={item.title} />
                            <div className={`absolute my-1 inset-0 ${isLeft ? "right-1" : "left-1"} bg-linear-to-b from-transparent via-transparent to-[#000000] rounded-[7px]`} />
                            <span
                                className="absolute text-white text-[28px] font-bold leading-9 pl-2"
                                style={{ top: item.topPosition, transform: `translateY(-${item.topPosition})` }}
                            >
                                {item.title}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
