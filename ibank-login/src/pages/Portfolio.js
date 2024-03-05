import { Box, Button, Card, Stack } from "@mui/material";
import AccountTable from "../components/AccountsTable";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { COLORS } from "../utils/Constants";
import Widgets from "../components/Widgets";
export default function Portfolio() {
    return (<Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"}
        backgroundColor={COLORS.primaryFont}>
        <div>
            <AccountTable />
            <Stack direction={"flex"} justifyContent={"end"} alignItems={"center"} padding={"1rem"} >
                <Button variant="outlined" startIcon={<AddCircleIcon />} sx={{ border: "none" }} >
                    Add New Flexible Savings Account
                </Button>
            </Stack>
            <Widgets />
        </div>
    </Box>)
}