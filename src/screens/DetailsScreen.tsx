import React, { FC, useEffect, useState } from "react";
import {
  Container,
  Text,
  Content,
  Header,
  Left,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
  H1,
  H2,
  H3,
} from "native-base";

import { nasaAPI } from "../config" 
const HomeScreen: FC = ({ route, navigation }: any) => {
  const { itemId, random } = route.params;
  const [data, setData] = useState<never[]>([]);
  useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/${itemId}?api_key=${nasaAPI}`
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.navigate("Home")}>
            <Icon name="chevron-back-outline" />
          </Button>
        </Left>
      </Header>
      <Content>
        <Card>
          <CardItem bordered>
            <Body>
              <Text style={{ paddingBottom: 10 }}>Name: </Text>
              <Text>{data.name}</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={{ paddingBottom: 10 }}>NASA JPL Url: </Text>
              <Text>{data.nasa_jpl_url}</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text style={{ paddingBottom: 10 }}>
                Is Potentially Hazardous Asteroid:
              </Text>
              <H2>{data.is_potentially_hazardous_asteroid ? "Yes" : "No"}</H2>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default HomeScreen;
