import { Box, Button, Stack } from "@mui/material";
import AccountTable from "../components/AccountsTable";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { COLORS } from "../utils/Constants";
import Widgets from "../components/Widgets";
export default function Portfolio(){
    return(<Box display={"block"} padding={"5rem"} backgroundColor={COLORS.primaryFont}>
       <> 
       <AccountTable />
        <Stack direction={"flex"} justifyContent={"start"} alignItems={"center"} padding={"1rem"}>
           <Button  variant="outlined" startIcon={<AddCircleIcon/>} sx={{border:"none"}} >
                  Add New Flexible Savings Account
           </Button>
        </Stack>
        <Widgets/>
        </>
    </Box>)
}