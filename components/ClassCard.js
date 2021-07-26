import React from 'react';
import { Card, Avatar } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon style={{ backgroundColor: "#553651" }} color={"#f18b0c"} {...props} icon="dumbbell" />

const ClassCard = ({ color, title, subtitle }) => (
   <Card style={{ width: "85%", marginTop: 15, backgroundColor: "#441b3e" }}>
      <Card.Title
         titleStyle={{
            color,
            fontFamily: "basicLight"
         }}
         subtitleStyle={{
            color,
            fontFamily: "basicLight"
         }}
         title={title}
         subtitle={subtitle}
         left={LeftContent}
      />
   </Card>
);

export default ClassCard;