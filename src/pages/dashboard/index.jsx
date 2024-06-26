// material-ui
import { Grid, Typography, Box } from "@mui/material";

// project import
import AnalyticEcommerce from "../../components/cards/statistics/AnalyticEcommerce";
import MyResponsiveCirclePacking from "./MyResponsiveCirclePacking";
import { mokChartData } from "../../assets/mockData/data";
import { useState } from "react";
import { drawerWidth } from "../../config";
import { useSelector } from "react-redux";
// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // state for zoom ogf the node
  const [zoomedId, setZoomedId] = useState(null);
  // state for the show details in card
  const [showDetails, setShowDetails] = useState(false);
  const [detailsNode, setDetailsNode] = useState(null);

  const { drawerOpen } = useSelector((state) => state.menu);
  console.log("detailsNode", detailsNode);
  return (
    <>
      <Box sx={{ height: "70vh", width: `${drawerOpen} ?  '82vw' : '100vw'`,position:'relative' }}>
        <MyResponsiveCirclePacking
          data={mokChartData}
          setZoomedId={setZoomedId}
          zoomedId={zoomedId}
          setShowDetails={setShowDetails}
          showDetails={showDetails}
          setDetailsNode={setDetailsNode}
          detailsNode={detailsNode}
        />
        
      </Box>
      {showDetails && (
        <Box sx={{position:"absolute",top:70,right:1}}>
       <AnalyticEcommerce
        title={detailsNode.color}
        count={detailsNode.data.name}
        percentage={27.4}
        isLoss
        color="warning"
        extra="$20,395"
        colorText={detailsNode.color}

      />
        </Box>
       
      )}
      
    </>
  );
};

export default DashboardDefault;
