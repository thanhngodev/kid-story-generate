import { OPTION_IMAGE_LIST } from "@/app/common/constant";
import OptionList from "./OptionList";
import { UserSelectionProps } from "@/app/interfaces/app.interface";

const ImageStyle = ({ userSelection }: UserSelectionProps) => {
  const optionImageList = OPTION_IMAGE_LIST;

  return (
    <div>
      <label className="font-bold text-2xl md:text-4xl text-primary ">4. Image Style</label>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-3 ">
        <OptionList
          optionList={optionImageList}
          userSelection={userSelection}
          fieldName={"imageStyle"}
        />
      </div>
    </div>
  );
};

export default ImageStyle;
