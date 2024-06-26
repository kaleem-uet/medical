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
    // <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    //   {/* row 1 */}
    //   <Grid item xs={12} sx={{ mb: -2.25 }}>
    //     <Typography variant="h5">Dashboard</Typography>
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
    //   </Grid>
    //   <Grid item xs={12} sm={6} md={4} lg={3}>
    //     <AnalyticEcommerce title="Total Sales" count="$35,078" percentage={27.4} isLoss color="warning" extra="$20,395" />
    //   </Grid>
    //  <Grid item md={12}>

    //  </Grid>

    // </Grid>
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
