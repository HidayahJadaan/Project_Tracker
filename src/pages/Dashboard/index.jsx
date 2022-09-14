import React, { useEffect } from "react";
import Inbox from "../../components/Dashboard/Inbox";
import StatisticsBar from "../../components/Dashboard/Statistics";
import TimelineComponent from "../../components/Dashboard/Timeline";
import TaskDonut from "../../components/Dashboard/TaskDonut";
import LiquidPlot from "../../components/Dashboard/Liquid";
import { useAuth } from "../../contexts/AuthContext";
import { Row, Col } from "antd";
import ProjectsTable from "../../components/Dashboard/ProjectsTable";
import NoData from "../../components/Dashboard/NoData";

const instructorDashboard = (
  <Row gutter={[16, 24]}>
    <Col xs={24}>
      <StatisticsBar />
    </Col>
    <Col xs={24} sm={12}>
      <Inbox />
    </Col>
    <Col xs={24} sm={12}>
      <TimelineComponent />
    </Col>
    <Col xs={24}>
      <ProjectsTable />
    </Col>
  </Row>
);

const studentDashboard = (
  <Row gutter={[16, 24]}>
    <Col xs={24} sm={12}>
      <TimelineComponent />
    </Col>
    <Col xs={24} sm={12}>
      <Inbox />
    </Col>
    <Col xs={24} sm={12}>
      <TaskDonut />
    </Col>
    <Col xs={24} sm={12}>
      <LiquidPlot />
    </Col>
  </Row>
);

const studentDashboardNoGroup = (
  <Row gutter={[16, 24]}>
    <Col xs={24} sm={12}>
      <NoData title='TimeLine' />
    </Col>
    <Col xs={24} sm={12}>
      <Inbox />
    </Col>
    <Col xs={24} sm={12}>
      <NoData title='Tasks Summary' />
    </Col>
    <Col xs={24} sm={12}>
      <NoData title='Group Progress' />
    </Col>
  </Row>
);

export default function Dashboard() {
  const { currentUser } = useAuth();
  const hasAGroup = currentUser.groupId
    ? studentDashboard
    : studentDashboardNoGroup;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return currentUser.instructor ? instructorDashboard : hasAGroup;
}
