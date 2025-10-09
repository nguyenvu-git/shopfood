export default function TopBlock(){
    return<>
        <p className="text-[20px] font-medium">Top Categories</p>
          <div className="mt-5">
            <div className="flex justify-between">
              <p className="text-[14px]">Fresh Fruit</p>
              <p className="text-[14px] text-[#808080]">(134)</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Vegetables</p>
              <p className="text-[14px] text-[#808080]">(150)</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Cooking</p>
              <p className="text-[14px] text-[#808080]">(54)</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Snacks</p>
              <p className="text-[14px] text-[#808080]">(47)</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Beverages</p>
              <p className="text-[14px] text-[#808080]">(43)</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Beauty & Health</p>
              <p className="text-[14px] text-[#808080]">(38)</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Bread & Bakery</p>
              <p className="text-[14px] text-[#808080]">(15)</p>
            </div>
          </div>
          <p className="w-100 h-[1px] bg-[#E5E5E5] mt-[28px]"></p>
          <div className="">
            <p className="text-[20px] mt-5 font-medium">Popular Tag</p>
            <div className="flex flex-wrap gap-2 mt-5">
             <p className="bg-[#F2F2F2] inline-block rounded-[30px] px-4 py-[6px] text-[14px] hover:bg-[#00B207] select-none cursor-pointer">Healthy</p>
             <p className="bg-[#F2F2F2] inline-block rounded-[30px] px-4 py-[6px] text-[14px] hover:bg-[#00B207] select-none cursor-pointer">Low fat</p>
             <p className="bg-[#F2F2F2] inline-block rounded-[30px] px-4 py-[6px] text-[14px] hover:bg-[#00B207] select-none cursor-pointer">Vegetarian</p>
             <p className="bg-[#F2F2F2] inline-block rounded-[30px] px-4 py-[6px] text-[14px] hover:bg-[#00B207] select-none cursor-pointer">Bread</p>
             <p className="bg-[#F2F2F2] inline-block rounded-[30px] px-4 py-[6px] text-[14px] hover:bg-[#00B207] select-none cursor-pointer">Kid foods</p>
             <p className="bg-[#F2F2F2] inline-block rounded-[30px] px-4 py-[6px] text-[14px] hover:bg-[#00B207] select-none cursor-pointer">Vitamins</p>
            </div>
          </div>
          <p className="w-100 h-[1px] bg-[#E5E5E5] mt-[28px]"></p>
          <div className="">
            <p className="text-[20px] font-medium mt-5 ">Recently Added</p>
            <div className="flex gap-3 mt-4 cursor-pointer">
              <img src="\img\blog4.jpg" alt="" />
              <div className="">
                <p className="font-medium">Curabitur porttitor orci eget nequ accumsan.</p>
                <div className="flex gap-[6px] mt-2">
                  <img src="\img\calendar.svg" alt="" />
                  <p className="text-[#666] text-[14px]">Apr 25, 2021</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5 cursor-pointer">
              <img src="\img\blog5.jpg" alt="" />
              <div className="">
                <p className="font-medium">Curabitur porttitor orci eget nequ accumsan.</p>
                <div className="flex gap-[6px] mt-2">
                  <img src="\img\calendar.svg" alt="" />
                  <p className="text-[#666] text-[14px]">Apr 25, 2021</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-5 cursor-pointer">
              <img src="\img\blog6.jpg" alt="" />
              <div className="">
                <p className="font-medium">Curabitur porttitor orci eget nequ accumsan.</p>
                <div className="flex gap-[6px] mt-2">
                  <img src="\img\calendar.svg" alt="" />
                  <p className="text-[#666] text-[14px]">Apr 25, 2021</p>
                </div>
              </div>
            </div>
          </div>
    </>
}