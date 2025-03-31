


export const Card = ({ smallcase }) => {
    return (
      <div className="flex gap-8 w-full h-auto mb-1 px-2 py-6 border border-gray-200 rounded-sm">
        <img src={`https://assets.smallcase.com/images/smallcases/160/${smallcase.scid}.png`} className="w-16 h-16"></img>
        <div className="w-full flex items-center justify-between ">
          <section>
            <div className="flex flex-col">
              <div className="flex justify-between mb-2">
                <h4 className="font-bold text-[rgb(47,54,63)]">{smallcase.info.nameAttributes.displayName}</h4>
                <p>{smallcase.subscriberCount === 0 ? "Free Access" : ""}</p>
              </div>
              <p className="mb-2">{smallcase.info.shortDescription}</p>
              <p className="mb-2">By {smallcase.info.owner.name}</p>
            </div>
            {/* <div>Bookmark</div> */}
          </section>
          <section>
            <div className="flex">
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <p>Min. Amount</p>
                  <p>{smallcase.stats.minInvestAmount}</p>
                </div>
                <div className="flex flex-col">
                  <p>{smallcase.stats.ratios.cagrDuration} CAGR</p>
                  <p>blurred</p>
                </div>
              </div>
              <div>
                <img alt=""></img>
                <p>{smallcase.stats.ratios.riskLabel}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };