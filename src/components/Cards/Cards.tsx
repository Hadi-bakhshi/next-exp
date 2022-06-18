import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box } from "@mui/material";
import FirstModal from "../Modal/FirstModal";

interface ICardProps {
  id?: number;
  title: string;
  description: string;
  time: number;
}

export default function Cards({id, title, description, time} : ICardProps) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        component="img"
        height="150"
        image="https://www.carlogos.org/logo/Saipa-logo-2560x1440.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", gap: 1, alignItems: "center", pl: 1, pb: 1 }}>
        <AccessTimeIcon color="action" fontSize="small" />
        <Typography variant="subtitle2" color={"gray"}>
          {time} ساعت تا اتمام زمان باقی مانده
        </Typography>
      </Box>
      <CardActions>
        <FirstModal />
        <Button size="small" sx={{marginLeft:"20px"}}>مشاهده اطلاعات ثبت شده</Button>
      </CardActions>
    </Card>
  );
}
