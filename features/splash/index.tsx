import SplashTitle from "@/features/splash/splashTitle";

import SplashObject from "./object";

const SplashScreen = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="pt-[20%]">
        <SplashTitle />
      </div>
      <SplashObject />
    </div>
  );
};

export default SplashScreen;
