import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img}) => {
    return (
        <Card sx={{ Width: 100 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            width="100%"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {price}
            </Typography>
           </CardContent>
        </CardActionArea>
        <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined">
          Ver mas
          </Button>
          </Link>
        </CardActions>
      </Card>
    );
};