import low from "../assets/icons/Low.png";
import medium from "../assets/icons/2.png";
import high from "../assets/icons/3.png";
import { calculateReturns } from "../utils";

const Card = ({ smallcase, returns }) => {
  let riskLabel = smallcase.stats.ratios.riskLabel.split(" ")[0];

  return (
    <div className="flex gap-8 w-full h-auto mb-1 px-2 py-6 border border-gray-200 rounded-md hover:border-gray-300">
      <img
        src={`https://assets.smallcase.com/images/smallcases/160/${smallcase.scid}.png`}
        className="w-16 h-16"
      ></img>
      <div className="w-full flex items-center justify-between ">
        <section className="w-1/2">
          <div className="flex flex-col">
            <div className="flex justify-between mb-2">
              <h4 className="font-bold text-[rgb(47,54,63)]">
                {smallcase.info.nameAttributes.displayName}
              </h4>
              <p>{smallcase.subscriberCount === 0 ? "Free Access" : ""}</p>
            </div>
            <p className="mb-2">{smallcase.info.shortDescription}</p>
            <p className="mb-2">By {smallcase.info.owner.name}</p>
          </div>
          {/* <div>Bookmark</div> */}
        </section>
        <section>
          <div className="flex items-center">
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <p className="text-[rgb(129,135,140)] mb-2">Min. Amount</p>
                <p className="text-[16px] text-[rgb(47,54,63)] font-bold">
                  ₹ {smallcase.stats.minInvestAmount}
                </p>
              </div>
              <div className="flex flex-col">
                {returns === null ? (
                  <p className="text-[rgb(129,135,140)] text-[14px] mb-2">
                    {smallcase.stats.ratios.cagrDuration} CAGR
                  </p>
                ) : (
                  <p className="text-[rgb(129,135,140)] text-[14px] mb-2">
                    {returns} CAGR
                  </p>
                )}
                {returns === null ? (
                  <p className="text-green-600 font-bold">
                    {calculateReturns(
                      smallcase,
                      smallcase.stats.ratios.cagrDuration
                    )}
                  </p>
                ) : (
                  <p className="text-green-600 font-bold">
                    {calculateReturns(smallcase, returns)}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center px-2 py-1 ml-6 border border-[rgb(221,224,228)] rounded-md">
              <img
                alt=""
                src={
                  riskLabel === "Low"
                    ? low
                    : riskLabel === "Medium"
                    ? medium
                    : high
                }
                width="20px"
                height="20px"
                className="mr-1"
              ></img>
              <p className="text-s text-[rgb(83,91,98)] ">
                {smallcase.stats.ratios.riskLabel}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Card;
