import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ title, description, price, id, img}) => {
    return (
        <Card sx={{ width: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            width="100%"
            image={img}
            alt="green iguana"
          />
          <CardContent className="cards">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
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