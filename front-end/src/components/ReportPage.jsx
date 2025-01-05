import React from "react";
import styled from "styled-components";

const ReportPageContainer = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ReportCard = styled.div`
  background-color: ${({ theme }) => theme.bgDark};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const ReportType = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 10px;
`;

const ReportDate = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 5px 0;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;

  background-color: ${({ status }) =>
    status === "Pending"
      ? "#FFC107"
      : status === "Resolved"
      ? "#4CAF50"
      : "#F44336"};
`;

const ReportDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 10px;
`;

const ReportPage = () => {
  const reports = [
    {
      id: 1,
      type: "Pelanggaran Hak Cipta",
      date: "2024-12-25",
      status: "Pending",
      description: "Laporan mengenai video yang melanggar hak cipta.",
    },
    {
      id: 2,
      type: "Konten Tidak Pantas",
      date: "2024-12-20",
      status: "Resolved",
      description: "Laporan tentang video dengan konten tidak pantas.",
    },
    {
      id: 3,
      type: "Spam",
      date: "2024-12-18",
      status: "Rejected",
      description: "Laporan mengenai video spam atau tidak relevan.",
    },
    {
      id: 4,
      type: "Pemerasan",
      date: "2024-12-15",
      status: "Pending",
      description: "Laporan tentang video yang mengandung unsur pemerasan.",
    },
    {
      id: 5,
      type: "Hoax",
      date: "2024-12-10",
      status: "Resolved",
      description: "Laporan mengenai video dengan informasi palsu (hoax).",
    },
  ];

  return (
    <ReportPageContainer>
      <Title>Daftar Laporan</Title>
      <ReportGrid>
        {reports.map((report) => (
          <ReportCard key={report.id}>
            <ReportType>{report.type}</ReportType>
            <ReportDate>Tanggal: {report.date}</ReportDate>
            <StatusBadge status={report.status}>{report.status}</StatusBadge>
            <ReportDescription>{report.description}</ReportDescription>
          </ReportCard>
        ))}
      </ReportGrid>
    </ReportPageContainer>
  );
};

export default ReportPage;
