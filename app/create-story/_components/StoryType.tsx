import { OPTION_LIST } from "@/app/common/constant";
import OptionList from "./OptionList";

const StoryType = ({ userSelection }: any) => {
  const optionList = OPTION_LIST;

  return (
    <div>
      <label className="font-bold text-2xl md:text-4xl text-primary ">2. Story Type</label>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3 ">
        <OptionList
          optionList={optionList}
          userSelection={userSelection}
          fieldName={"storyType"}
        />
      </div>
    </div>
  );
};

export default StoryType;
