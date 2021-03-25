import React, { FC, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Text,
  Content,
  Form,
  Item,
  Input,
  Button,
  Card,
  Header,
} from "native-base";

import { nasaAPI } from "../config";

const HomeScreen: FC = ({ navigation }: any) => {
  const [asteroidID, setAsteroidID] = useState<string | null>(null);
  const [data, setData] = useState([]);
  const submit = () => {};

//   const fetchRandomAstroid = () => { sorry could not manage this
//     fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${nasaAPI}`)
//       .then((response) => response.json())
//       .then((json) => setData(json))
//       .catch((error) => console.error(error));
//     {
//       () => console.log("hi");
//     }
//   };
  return (
    <Container>
      <Content>
        <Text>Welcome try !{asteroidID}</Text>
        <Form>
          <Card>
            <Item>
              <Input
                placeholder="Enter Asteroid ID*"
                onChangeText={(text) => setAsteroidID(text)}
              />
            </Item>
            <Button
              block
              rounded
              onPress={() =>
                navigation.navigate("Details", { itemId: asteroidID })
              }
              disabled={asteroidID ? false : true}
            >
              <Text>Submit</Text>
            </Button>
          </Card>
        </Form>
        <Button
          block
          rounded
          onPress={() => navigation.navigate("Details", { itemId: '2000887' })}
        >
          <Text>Random Asteroid</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default HomeScreen;
