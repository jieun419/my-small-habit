import { ObjSplashEye } from "@/assets/icons";

const SplashObject = () => {
  return (
    <div className="bg-primary absolute -bottom-[20%] left-10 aspect-square h-[540px] w-[540px] rounded-full">
      <ObjSplashEye className="absolute top-40 left-20" />
    </div>
  );
};

export default SplashObject;
