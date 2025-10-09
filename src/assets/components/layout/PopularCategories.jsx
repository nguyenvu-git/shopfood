export default function PopularCategories() {
  const Items = [
    { image: "/img/p1.jpg", text: "Fresh Fruit" },
    { image: "/img/p2.jpg", text: "Fresh Vegetables" },
    { image: "/img/p3.jpg", text: "Meat & Fish" },
    { image: "/img/p4.jpg", text: "Snacks" },
    { image: "/img/p5.jpg", text: "Beverages" },
    { image: "/img/p7.jpg", text: "Beauty & Health" },
    { image: "/img/p6.jpg", text: "Bread & Bakery" },
    { image: "/img/p8.jpg", text: "Baking Needs" },
    { image: "/img/p9.jpg", text: "Cooking" },
    { image: "/img/p10.jpg", text: "Diabetic Food" },
    { image: "/img/p10.jpg", text: "Diabetic Food" },
    { image: "/img/p10.jpg", text: "Diabetic Food" },
  ];
  return (
    <>
      <div className="w-[400px] sm:w-[1320px] mx-auto mt-[60px]">
        <div className="flex items-center justify-between">
          <p className="text-2xl sm:text-[32px] font-semibold">
            Popular Categories
          </p>
          <div className="flex gap-3 justify-center items-center cursor-pointer">
            <p className="text-[#00B207] font-medium">View All</p>
            <img
              className="text-sm sm:w-[15px]"
              src="\public\img\Group.svg"
              alt=""
            />
          </div>
        </div>
        <div className="hidden sm:flex flex-wrap gap-2.5 items-center justify-center mt-8 select-none">
          {Items.map((item, index) => (
            <div
              className="flex flex-col rounded-sm border-1 cursor-pointer border-[#E6E6E6] items-center justify-center hover:border-[#2C742F] hover:text-[#2C742F]"
              key={index}
            >
              <img
                className="sm:w-[190px] sm:h-[130px] mt-4 w-[101px] h-[75px]"
                src={item.image}
                alt=""
              />
              <p className="mt-4 mb-6 font-medium sm:text-[18px] text-[12px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* mobile */}
        <div className="sm:hidden flex flex-wrap gap-2.5 items-center justify-center mt-8 select-none">
          {Items.slice(0, 6).map((item, index) => (
            <div
              className="flex flex-col rounded-sm border-1 cursor-pointer border-[#E6E6E6] items-center justify-center hover:border-[#2C742F] hover:text-[#2C742F]"
              key={index}
            >
              <img
                className="sm:w-[190px] sm:h-[130px] mt-4 w-[121px] h-[75px]"
                src={item.image}
                alt=""
              />
              <p className="mt-4 mb-6 font-medium sm:text-[18px] text-[12px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
