import { OPTION_AGE_LIST } from "@/app/common/constant";
import { UserSelectionProps } from "@/app/interfaces/app.interface";
import OptionList from "./OptionList";

const AgeGroup = ({ userSelection }: UserSelectionProps) => {
  const optionAgeList = OPTION_AGE_LIST;

  return (
    <div>
      <label className="font-bold text-2xl md:text-4xl text-primary ">
        3. Age Group
      </label>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3 ">
        <OptionList
          optionList={optionAgeList}
          userSelection={userSelection}
          fieldName={"ageGroup"}
        />
      </div>
    </div>
  );
};

export default AgeGroup;
