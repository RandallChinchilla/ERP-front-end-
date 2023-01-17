import React from "react";
/* eslint-disable */
// import "./App.css";
//Report Viewer source
import "@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min";
import "@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css";
//Data-Visualization
import "@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min";
import "@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min";
//Reports react base
import "@boldreports/react-reporting-components/Scripts/bold.reports.react.min";

var viewerStyle = { height: "700px", width: "100%" };

const reportTest = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  return (
    <div>
      <div style={viewerStyle}>
        <BoldReportViewerComponent
          id="reportviewer-container"
          // reportServiceUrl={
          //   "https://demos.boldreports.com/services/api/ReportViewer"
          // }

          reportServiceUrl={`${baseUrl}/ReportViewer`}
          // reportServerUrl={"https://app1673822860.boldbi.com/bi/"}
          //reportPath={"~/Resources/area-chart.rdl"}
        ></BoldReportViewerComponent>
      </div>
    </div>
  );
};

export default reportTest;
