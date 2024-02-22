import { ImageListItem } from "@mui/material";

export default function Image ({image,alt, customStyle}){
    return (
        <ImageListItem  sx={customStyle}>
            <img  src={image} alt={alt} style={{width:"100%",height:"100%"}}/>
        </ImageListItem>
    )
}