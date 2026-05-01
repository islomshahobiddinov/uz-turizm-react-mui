import { Box, Tab } from "@mui/material";
import "./App.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState, type SyntheticEvent } from "react";
import Toshkent from "./components/Toshkent";
import Fargona from "./components/Fargona";

function App() {
  const [tabValue, setTabValue] = useState(1);
  function handleChange(e:SyntheticEvent, newValue: number) {
    setTabValue(newValue);
  }
  return (
    <>
      <div className="container">
        <h1>O'zbekistonning turizm uchun joylari</h1>
        <TabContext value={tabValue}>
          <Box>
            <TabList onChange={handleChange}>
              <Tab value={1} label="Toshkent" />
              <Tab value={2} label="Farg'ona" />
              <Tab value={3} label="Andijon" />
              <Tab value={4} label="Namangan" />
              <Tab value={5} label="Qashqadaryo" />
              <Tab value={6} label="Surhondaryo" />
              <Tab value={7} label="Samarqand" />
              <Tab value={8} label="Buhoro" />
              <Tab value={9} label="Xorazm" />
              <Tab value={10} label="Jizzah" />
              <Tab value={11} label="Jizzah" />
              <Tab value={12} label="Sirdaryo" />
              <Tab value={13} label="Qoraqalpog'iston" />
            </TabList>
          </Box>
          <TabPanel value={1}>
            <Toshkent />
          </TabPanel>
          <TabPanel value={2}>
            <Fargona />
          </TabPanel>
        </TabContext>
      </div>
    </>
  );
}

export default App;
