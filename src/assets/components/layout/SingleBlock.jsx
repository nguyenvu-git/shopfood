import Header from "../page/Header";
import Footer from "../page/Footer";
import TopBlock from "./TopBlog";
export default function SingleBlock() {
  return (
    <>
      <Header></Header>
      <div className="w-[1320px] mx-auto flex gap-[48px] mt-60">
        <div className="w-[872px]">
          <img src="\img\blog1.jpg" alt="" />
          <div className="flex gap-4 pt-8">
            <div className="flex gap-1 items-center">
              <img
                className="w-[20px] h-[20px]"
                src="\img\tag.svg"
                alt=""
              />
              <p className="text-[#4D4D4D]">Food</p>
            </div>
            <div className="flex gap-1 items-center">
              <img
                className="w-[20px] h-[20px]"
                src="\img\user1.svg"
                alt=""
              />
              <p className="text-[#4D4D4D]">By Admin</p>
            </div>
            <div className="flex gap-1 items-center">
              <img
                className="w-[20px] h-[20px]"
                src="\img\chat.svg"
                alt=""
              />
              <p className="text-[#4D4D4D]">65 Comments</p>
            </div>
          </div>
          <p className="text-[32px] font-medium mt-2">
            Maecenas tempor urna sed quam mollis, a placerat dui fringill
            Suspendisse.
          </p>
          <div className="flex gap-3 mt-8 items-center">
            <img
              className="w-[50px] h-[50px]"
              src="\img\avt2.jpg"
              alt=""
            />
            <div className="">
              <p className="font-medium">Cameron Williamson</p>
              <p className="text-[14px] text-[#808080]">
                4 April, 2021 • 4 April, 2021
              </p>
            </div>
          </div>
          <p className="w-[872px] h-[1px] bg-black mt-6"></p>
          <p className="text-[20px] font-medium mt-6">
            Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat
            dolor at scelerisque imperdiet. Phasellus tristique felis dolor.
          </p>
          <p className="text-[18px] text-[#808080] mt-4">
            Maecenas elementum in risus sed condimentum. Duis convallis ante ac
            tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus
            vitae orci at euismod. Integer auctor augue in erat vehicula, quis
            fermentum ex finibus.
          </p>
          <p className="text-[18px] text-[#808080] mt-6">
            Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam
            interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices
            lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum
            turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula
            viverra neque, malesuada consectetur diam sapien volutpat risus.
            Quisque eget tortor lobortis, facilisis metus eu, elementum est.
            Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.
          </p>
          <div className="flex gap-6">
            <img src="\img\blog2.jpg" alt="" />
            <img src="\img\blog3.jpg" alt="" />
          </div>
          <p className="text-[18px] text-[#808080] mt-6">
            Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis
            vehicula ut, vestibulum ut mauris. Nullam non felis varius dui
            rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed
            luctus. Proin iaculis euismod metus non sollicitudin. Duis vel
            luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh
            ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec
            faucibus ultricies.
          </p>
        </div>
        <div className="">
          
          <TopBlock></TopBlock>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
