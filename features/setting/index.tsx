import ScreenContainer from "@/components/container/screenContainer";

import SettingSection from "./components/settingSection";
import ThemeSection from "./components/themeSection";

const SettingScreen = () => {
  return (
    <ScreenContainer>
      <SettingSection />
      <ThemeSection />

      <section className="absolute bottom-10 mt-10 flex w-full flex-col gap-1">
        <p className="text-center text-sm text-gray-500">
          주기적이지 않아도 작은 습관 하나라도
          <br />
          이뤘다면 이미 잘하고 있어요 :)
        </p>
      </section>
    </ScreenContainer>
  );
};

export default SettingScreen;
