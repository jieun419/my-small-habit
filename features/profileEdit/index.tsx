import ScreenContainer from "@/components/container/screenContainer";
import CircleTitle from "@/components/title/circleTitle";
import Title from "@/components/title/title";

import EditForm from "./editForm";

interface ProfileEditScreenProps {
  userId: string;
}

const ProfileEditScreen = ({ userId }: ProfileEditScreenProps) => {
  return (
    <ScreenContainer>
      <CircleTitle>
        <Title size="text-xl">정보를 입력해주세요!</Title>
      </CircleTitle>

      <EditForm userId={userId} />
    </ScreenContainer>
  );
};

export default ProfileEditScreen;
