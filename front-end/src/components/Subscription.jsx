import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--background);
  padding: 10px;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const SubscriberBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SubscriberItem = styled.a`
  background-color: var(--card-background);
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Content = styled.div`
  padding: 10px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px;
  color: ${({ theme }) => theme.text};
`;

const Views = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const ThemeButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--button-bg);
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const subscriptions = [
  {
    title: "How to Ace JavaScript Interviews",
    channel: "Code With Me",
    views: "12k views • 1 day ago",
    thumbnail:
      "https://i.ytimg.com/vi/ucn4jAPWBdQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC8pw6bUQrSE0SlSLnwcTKlYjlqPw",
    url: "https://youtu.be/ucn4jAPWBdQ?si=1FVuI8KNmEm10eyP",
  },
  {
    title: "Healthy Recipes for Beginners",
    channel: "Foodie Channel",
    views: "5k views • 3 days ago",
    thumbnail:
      "https://i.ytimg.com/vi/_f4ArgoSmoM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDZQBI63UibUwQtu486-L0BtFD9QA",
    url: "https://youtu.be/_f4ArgoSmoM?si=HpT25FIovTgQTeTz",
  },
  {
    title: "Yoga for Beginners",
    channel: "Fitness Gurus",
    views: "18k views • 1 week ago",
    thumbnail:
      "https://i.ytimg.com/vi/T41mYCmtWls/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDm9ZGXiKyWVA2UYwnHVbQvwDVvag",
    url: "https://youtu.be/T41mYCmtWls?si=5QPYAvatCmLPid2O",
  },
  {
    title: "Baru Nyobain WORDPRESS 🤯",
    channel: "Fitness Gurus",
    views: "30k views • 2 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/S1Qi6Eq5GVQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAbqf6EXvXfSKc5uIj4FUKUsF2ldQ",
    url: "https://youtu.be/S1Qi6Eq5GVQ?si=KH8CnT5jy8T02AcY",
  },
  {
    title: "PPN & Fasilitas super mewah Pejabat Indonesia",
    channel: "Fitness Gurus",
    views: "1m views • 3 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/uoMGUhSqxOA/maxresdefault.jpg",
    url: "https://youtu.be/uoMGUhSqxOA?si=pXRan2gV2mJdhHqV",
  },
  {
    title: "video ini bikin kamu ngerasa tua",
    channel: "Fitness Gurus",
    views: "323k views • 3 weeks ago",
    thumbnail:
      "https://i.ytimg.com/vi/b8iGcNRVwtA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCgPz_6yVAq2EHV3TNmtyF3aOpqHQ",
    url: "https://youtu.be/b8iGcNRVwtA?si=aqKx1JPC8tW5Rjx3",
  },
  {
    title: "Aku Dalam 5 Tahun",
    channel: "Mr beast",
    views: "133m views • 5 year ago",
    thumbnail: "https://i.ytimg.com/vi/AKJfakEsgy0/maxresdefault.jpg",
    url: "https://youtu.be/AKJfakEsgy0?si=LqCkxlpj1P_xto5A",
  },
  {
    title: "Mending rakit pc",
    channel: "Uler sakti",
    views: "216k views • 1 weeks ago",
    thumbnail:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1604646320/ogxlabmxcjh87kotoyry.jpg",
    url: "https://youtu.be/8z1PaCq-v24?si=ZVIslEeWAOIvmQiB",
  },
  {
    title:
      "PARA ILMUWAN TERKEJUT!! TIDAK ADA YANG SEPERTI INI DALAM MATEMATIKA!!",
    channel: "Rumah editor",
    views: "1m views • 4 month ago",
    thumbnail: "https://i.ytimg.com/vi/F59fo_catJ0/maxresdefault.jpg",
    url: "https://youtu.be/F59fo_catJ0?si=QyKehfSBLBi71wSD",
  },
  {
    title: "MiawAug Room Tour Di Akhir 2024",
    channel: "miawaug",
    views: "889k views • 6 day ago",
    thumbnail:
      "https://i.ytimg.com/vi/So6p5T2JnWU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB-WuZ6ibHQKGKKaTRennjOU-4ndw",
    url: "https://youtu.be/So6p5T2JnWU?si=2MjH7Rfn1W-_315s",
  },
  {
    title: "100 Hari Petani di Minecraft",
    channel: "itsSandwich",
    views: "216k views • 1 weeks ago",
    thumbnail: "https://i.ytimg.com/vi/kY2lN05etXE/maxresdefault.jpg",
    url: "https://youtu.be/kY2lN05etXE?si=2Wz8kRHlucOLBUlS",
  },
  {
    title: "Gua Bermain 100% Stardew Valley - The Movie",
    channel: "Uler sakti",
    views: "68k views • 3 month ago",
    thumbnail:
      "https://i.ytimg.com/vi/uM9lB2bGvpY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDesnegj7DKftTLkkBuSNGV72t5jA",
    url: "https://youtu.be/AuyrOaeoqJQ?si=3mSE7fbFD6G4aps7",
  },
];

const Subscription = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Container>
      <PageTitle>Your Subscriptions</PageTitle>
      <SubscriberBar>
        {subscriptions.map((subscription, index) => (
          <SubscriberItem href={subscription.url} key={index}>
            <div>
              <Thumbnail src={subscription.thumbnail} alt="Thumbnail" />
            </div>
            <Content>
              <Title>{subscription.title}</Title>
              <Views>{subscription.views}</Views>
            </Content>
          </SubscriberItem>
        ))}
      </SubscriberBar>
    </Container>
  );
};

export default Subscription;
