import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => {
  return {
    root: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    card: {
      width: "80%",
      marginTop: "10vh",
      marginBottom: "10vh"
    }
  };
});

const CardBlock = props => {
  const { title, subTitle, paragraphs = [] } = props;
  const c = useStyles();
  return (
    <div className={c.root}>
      <Card className={c.card}>
        <CardHeader title={title} subheader={subTitle} />
        <CardContent className={c.cardContent}>
          {paragraphs.map((paragraph, i) => {
            if (!Array.isArray(paragraph)) {
              return (
                <Typography key={i} paragraph>
                  {paragraph}
                </Typography>
              );
            } else {
              return (
                <ul key={i}>
                  {paragraph.map((e, j) => (
                    <li key={j}>
                      <Typography>{e}</Typography>
                    </li>
                  ))}
                </ul>
              );
            }
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardBlock;
