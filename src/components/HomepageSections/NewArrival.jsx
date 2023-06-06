import { AiOutlineArrowRight } from "react-icons/ai";

import SectionTitle from "../UI/SectionTitle";
import { flexCenter } from "./../../style";
import { newArrival } from "../../store/localdata";
import Button from "../UI/Button";

const NewArrival = () => {
  return (
    <section className={`${flexCenter} flex-col gap-y-9 py-12`}>
      <SectionTitle titletext="New Arrival" />
      <div className="flex self-start flex-col justify-between items-center px-14 md:px-20">
        <h2>APP</h2>
        <div className="semi-diamond bg-secondary"></div>
      </div>
      <div className="flex flex-wrap gap-7 justify-center px-3 align-top md:grid-cols-3 lg:px-6 lg:grid-cols-3">
        {newArrival.map((item) => {
          return (
            <figure key={item.id} className="w-40 md:w-56 text-center">
              <img
                src={item.image}
                className="w-full object-contain"
                alt={item.title}
              />
              <h5 className="text-body text-lg">{item.title}</h5>
              <p className="text-primary text-xl">&#x24;{item.price}</p>
            </figure>
          );
        })}
      </div>
      <Button
        btnstyle={`${flexCenter} h-auto gap-x-4 rounded-full px-10 text-xl text-title py-3 hover:bg-label hover:text-offwhite transition-all duration-500 ease-in-out`}
        to="/"
      >
        Explore More
        <AiOutlineArrowRight />
      </Button>
    </section>
  );
};

export default NewArrival;
