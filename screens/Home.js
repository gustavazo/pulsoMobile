import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import InstanceClassService from '../services/InstanceClassService';
import ClassCard from '../components/ClassCard';

const HomeScreen = () => {
   const [classes, setClasses] = useState([]);

   const getClasses = async () => {
      const classes = await InstanceClassService.find();
      setClasses(classes.data);
   };

   useEffect(() => {
      getClasses();
   }, [])

   return (
      <View style={{ flex: 1, backgroundColor: "#553651", alignItems: "center" }}>
         <Text style={{ color: "white", fontSize: 23, textAlign: "left", alignSelf: "flex-start", marginTop: 20, marginLeft: 25, fontFamily: "basicLight" }}>
            Próximas clases
         </Text>
         {
            classes.length && (
               classes.map(c => (
                  <ClassCard color="white" title={c.name} subtitle={c.date} />
               ))
            )
         }
      </View>
   );
}

export default HomeScreen;