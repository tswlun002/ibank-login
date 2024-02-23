import { Card, CardContent, Grid, Typography } from "@mui/material";
import { COLORS } from "../utils/Constants";
import WalletIcon from '@mui/icons-material/Wallet';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import TodayIcon from '@mui/icons-material/Today';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import PersonIcon from '@mui/icons-material/Person';
const Widget = ({ name, Icon, key }) => (
    <Grid item sm={2}>
        <Card sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "3rem", backgroundColor:COLORS.shadow,border:`1px solid ${COLORS.primary}` }}>
            <CardContent sx>
                <Icon key={key} style={{ color: COLORS.primary }} />
                <Typography key={key} variant="string" fontFamily={"sans-serif"} color={COLORS.default}>{name}</Typography>
            </CardContent>
        </Card>
    </Grid>)

export default function Widgets() {
    const widgetNames = [{ name: "Payments", icon: WalletIcon }, { name: "Prepaid", icon: PhoneIphoneIcon }, { name: "Debits", icon: TodayIcon },
    { name: "Interest", icon: AttachMoneyIcon }, { name: "Cards", icon: CreditCardIcon }, { name: "Notices", icon: ChatBubbleIcon }, { name: "Profile", icon: PersonIcon }]


    return (
    <Grid container display={"flex"} justifyContent={"start"} alignItems={"center"} spacing={2} xs={10} >
        <Grid item xs={12}>
            <Typography variant="h6" align="start">Widgets</Typography>
        </Grid>
        {widgetNames.map((data, index) => <Widget name={data.name} Icon={data.icon} key={index} /> )}
        
    </Grid>
    )
}