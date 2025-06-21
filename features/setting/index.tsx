import { faArrowRight, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/button";
import ScreenContainer from "@/components/container/screenContainer";
import IconElement from "@/components/icon/iconElement";
import SubTitle from "@/components/title/subTitle";

const SttingScreen = () => {
  return (
    <ScreenContainer>
      <section className="flex w-full flex-col gap-1">
        <Button variant="tertiary" align="between" isIcon>
          습관 추가/삭제/수정 하기
          <IconElement icon={faChevronRight} className="h-3 w-3" />
        </Button>
        <Button variant="tertiary" align="between" isIcon>
          년간 리포트 보기
          <IconElement icon={faChevronRight} className="h-3 w-3" />
        </Button>
        <Button variant="tertiary" align="between" isIcon>
          기본 정보 수정
          <IconElement icon={faChevronRight} className="h-3 w-3" />
        </Button>
      </section>
      <section className="mt-10 flex w-full flex-col gap-1 border-t border-solid border-gray-300 pt-10">
        <div className="flex w-full items-center justify-between gap-1">
          <SubTitle size="text-base">테마 선택</SubTitle>
          <div className="flex gap-1">
            <Button variant="tertiary" size="small" className="whitespace-nowrap">
              다크
            </Button>
            <Button variant="secondary" size="small" className="whitespace-nowrap">
              라이트
            </Button>
          </div>
        </div>
      </section>

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

export default SttingScreen;
