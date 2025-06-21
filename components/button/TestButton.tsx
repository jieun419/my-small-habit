import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Button from "./Button";
import IconElement from "../icon/iconElement";

const TestButton = () => {
  return (
    <div className="space-y-4 p-4">
      <h2 className="text-xl font-bold">Button align 테스트</h2>

      {/* between 테스트 */}
      <div className="space-y-2">
        <h3 className="font-semibold">Between 정렬 테스트</h3>
        <Button variant="tertiary" align="between" className="border border-gray-300">
          <span>왼쪽 텍스트</span>
          <IconElement icon={faChevronRight} className="h-4 w-4" />
        </Button>
      </div>

      {/* 다른 정렬들 테스트 */}
      <div className="space-y-2">
        <h3 className="font-semibold">다른 정렬들</h3>
        <Button variant="primary" align="left" className="border border-gray-300">
          왼쪽 정렬
        </Button>
        <Button variant="primary" align="center" className="border border-gray-300">
          가운데 정렬
        </Button>
        <Button variant="primary" align="right" className="border border-gray-300">
          오른쪽 정렬
        </Button>
      </div>

      {/* 아이콘 버튼 테스트 */}
      <div className="space-y-2">
        <h3 className="font-semibold">아이콘 버튼 with between</h3>
        <Button variant="tertiary" align="between" isIcon className="border border-gray-300">
          <span>텍스트</span>
          <IconElement icon={faPlus} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestButton;
