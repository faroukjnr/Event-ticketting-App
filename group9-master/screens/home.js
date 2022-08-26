import React from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { Card } from "react-native-elements";
import stavenger from "../images/stavenfer.jpg";
import badboys from "../images/badboys.jpg";
import blacklight from "../images/blacklight.jpg";
import capamerica from "../images/capamerica.jpg";
import euphoria from "../images/euphoria.jpg";
import flash from "../images/flash.jpg";
import intobadlands from "../images/intobadlands.jpg";
import joker from "../images/joker.jpg";
import lionking from "../images/lionking.jpg";
import merlin from "../images/merlin.jpg";
import spiderman from "../images/spiderman.jpg";
import avatar from "../images/avatar.jpg";

import SwiperComponent from "../swiper/SwiperComponent";
import SwiperComponent1 from "../swiper/SwiperComponent1";

export default function home({ navigation }) {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const handlePress = () => {
    navigation.navigate("payment");
    console.log("Pressed");
  };

  const images = [
    require('../images/merlin.jpg'),
    require('../images/blacklight.jpg'),
    require('../images/intobadlands.jpg'),
    require('../images/merlin.jpg'),
    require('../images/stavenfer.jpg')
  ]

  return (
    <ScrollView>
      
      <View style={styles.container}>
        
          <Text style={styles.text}>
            Welcome to TicketingVerse. Book all your favorite events with us
          </Text>
        


        <FlatList
    horizontal={true} 
    showsHorizontalScrollIndicator={true} 
    data={images}
    renderItem={ ({ item }) => (
      <Image source={item} 
        //key={index} 
        style={{
          width:100,
          height:100,
          borderWidth:2,
          borderColor:'#d35647',
          resizeMode:'contain',
          margin:8
        }}
      />
    )}
  />

        {/* <SwiperComponent1 /> */}

        <View>
          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Image source={avatar}></Card.Image>
            <Card.Divider style={{ flexDirection: "row" }} />
            <Text>Movie: Avatar</Text>
            <Text>Release Date: 8th May, 2008</Text>
            <Text>Duration: 1 hour 30 minutes</Text>
            <Text>Start Time: 7pm</Text>
            <Text>End Time8:pm:</Text>
            <Text>Address: Silverbird Cinema, Accra Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>

          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={badboys}></Card.Image>
            <Text>Movie: Bad Boys For Life</Text>
            <Text>Release Date 4th September 2021:</Text>
            <Text>Duration: 2hours 15 minutes</Text>
            <Text>Start Time: 8:45pm</Text>
            <Text>End Time: 11pm</Text>
            <Text>Address: West Hills Cinema</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View>
          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={blacklight}></Card.Image>
            <Text>Movie: Black Lightening</Text>
            <Text>Release Date: 4th November 2016</Text>
            <Text>Duration: 3 hours</Text>
            <Text>Start Time: 5pm</Text>
            <Text>End Time: 8pm</Text>
            <Text>Address: Silverbird Cinema Accra</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>

          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={capamerica}></Card.Image>
            <Text>Movie: Captain AMerica the First Avenger</Text>
            <Text>Release Date: 13th May 2007</Text>
            <Text>Duration: 2 hours 15 minutes</Text>
            <Text>Start Time: 6:45pm</Text>
            <Text>End Time: 9:00pm</Text>
            <Text>Address: West Hills Cinema</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View>
          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={euphoria}></Card.Image>
            <Text>Movie: Euphoria</Text>
            <Text>Release Date: 3rd August 2021</Text>
            <Text>Duration: 1 hour 15 minutes</Text>
            <Text>Start Time: 6:30pm</Text>
            <Text>End Time: 7:45pm</Text>
            <Text>Address:Silverbird Cinema Accra Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>

          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={flash}></Card.Image>
            <Text>Movie: The Flash</Text>
            <Text>Release Date: 8th October 2011</Text>
            <Text>Duration: 50 minutes</Text>
            <Text>Start Time: 8pm</Text>
            <Text>End Time: 8:50pm</Text>
            <Text>Address: West Hills Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity> 
          </Card>
        </View>

        <View>
          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={intobadlands}></Card.Image>
            <Text>Movie: Into the Badlands</Text>
            <Text>Release Date: 19th September 2017</Text>
            <Text>Duration: 1 hour 30 minutes</Text>
            <Text>Start Time: 8pm</Text>
            <Text>End Time: 9:30pm</Text>
            <Text>Address: Silverbird Cinema Accra Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>

          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={joker}></Card.Image>
            <Text>Movie: Joker</Text>
            <Text>Release Date: 15th December</Text>
            <Text>Duration: 2 hours</Text>
            <Text>Start Time: 9pm</Text>
            <Text>End Time: 11pm</Text>
            <Text>Address: West Hills Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View>
          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            {/* <Card.Divider /> */}
            <Card.Image source={lionking}></Card.Image>
            <Text>Movie: The Lion King</Text>
            <Text>Release Date: 14th June 2005</Text>
            <Text>Duration: 1 hour 45 minutes</Text>
            <Text>Start Time: 4pm</Text>
            <Text>End Time: 5:45pm</Text>
            <Text>Address: Silverbird Cinema Accra Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>

          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={merlin}></Card.Image>
            <Text>Movie: Merlin</Text>
            <Text>Release Date: 16th July</Text>
            <Text>Duration: 45 minutes</Text>
            <Text>Start Time: 6:15pm</Text>
            <Text>End Time: 7pm</Text>
            <Text>Address: West Hills Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View>
          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={spiderman}></Card.Image>
            <Text>Movie: Spiderman Far From Home</Text>
            <Text>Release Date: 13th November 2021</Text>
            <Text>Duration: 2 hours 30 minutes</Text>
            <Text>Start Time: 10:30pm</Text>
            <Text>End Time: 1am</Text>
            <Text>Address: Silverbird Cinema Accra Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>

          <Card
            containerStyle={{
              width: windowWidth / 2 - 20,
              backgroundColor: "#E34234",
              padding: 20,
              borderRadius: 30,
            }}
          >
            <Card.Divider />
            <Card.Image source={stavenger}></Card.Image>
            <Text>Movie: Captain America Winter Soldier</Text>
            <Text>Release Date: 8th February 2014</Text>
            <Text>Duration: 2 hours 10 minutes</Text>
            <Text>Start Time: 1pm</Text>
            <Text>End Time: 3:10pm</Text>
            <Text>Address: West Hills Mall</Text>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.roundButton1} onPress={handlePress}>
              <Text style={{fontSize:16}}>Buy VIP</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <Button title="next" onPress={() => navigation.navigate("register")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#990000",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  roundButton1: {
    width: 120,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
    backgroundColor: "orange",
    margin: 10,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    alignItems: "center",
    justifyContent: "center",
  },
});
