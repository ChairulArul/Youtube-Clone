import React, { useState } from "react";
import styled from "styled-components";
import {
  AccountCircle,
  Security,
  Notifications,
  Settings,
} from "@mui/icons-material";

const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgLighter};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Section = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  margin-bottom: 40px;
  /* box-shadow: 0px 2px 5px rgba(1, 1, 1, 0.5); */
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const SettingItem = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const IconWrapper = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  margin-right: 15px;
`;

const TextWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  flex-grow: 1;
`;

const SettingTitle = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  margin: 0 0 5px;
`;

const SettingDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  margin: 0;
`;

// Styled for Profile Section
const ProfileWrapper = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProfileName = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;

const ProfileEmail = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
`;

const SettingsPage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <Wrapper>
      <Title>Settings</Title>

      <Section>
        <SectionTitle>Profile</SectionTitle>
        <ProfileWrapper>
          <ProfileImage>
            <img
              src={
                profileImage || "https://via.placeholder.com/80?text=Profile"
              }
              alt="Profile"
            />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </ProfileImage>
          <ProfileDetails>
            <ProfileName>John Doe</ProfileName>
            <ProfileEmail>john.doe@example.com</ProfileEmail>
          </ProfileDetails>
        </ProfileWrapper>
      </Section>

      <Section>
        <SectionTitle>Account</SectionTitle>
        <SettingItem>
          <IconWrapper>
            <Security />
          </IconWrapper>
          <TextWrapper>
            <SettingTitle>Privacy</SettingTitle>
            <SettingDescription>
              Adjust your privacy settings and controls.
            </SettingDescription>
          </TextWrapper>
        </SettingItem>
      </Section>

      <Section>
        <SectionTitle>Notifications</SectionTitle>
        <SettingItem>
          <IconWrapper>
            <Notifications />
          </IconWrapper>
          <TextWrapper>
            <SettingTitle>Email Notifications</SettingTitle>
            <SettingDescription>
              Manage email notifications and preferences.
            </SettingDescription>
          </TextWrapper>
        </SettingItem>
        <SettingItem>
          <IconWrapper>
            <Settings />
          </IconWrapper>
          <TextWrapper>
            <SettingTitle>Push Notifications</SettingTitle>
            <SettingDescription>
              Enable or disable push notifications.
            </SettingDescription>
          </TextWrapper>
        </SettingItem>
      </Section>
    </Wrapper>
  );
};

export default SettingsPage;
