import { trendingTags } from "../../store/localdata";
import { flexCenter } from "../../style";

const Trending = () =>{
    return (
    <section className={`${flexCenter} flex-col gap-y-5 py-12 px-6 `}>
        <h2 className="text-2xl uppercase">@Trending</h2>
        <div className={`${flexCenter} flex-wrap gap-3`}>
        {trendingTags.map(tag => {
            return(
                <p key={tag} className="bg-inputbg rounded-full px-3 w-fit text-title text-xl">#{tag}</p>
            )
        })}
        </div>
    </section>
)}

export default Trending;