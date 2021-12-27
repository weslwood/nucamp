import React, { Component } from "react";
import { ScrollView, Text } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import { baseUrl } from "../shared/baseUrl";

const mapStateToProps = (state) => {
  return {
    partners: state.partners,
  };
};

function Mission() {
  return (
    <Card title="Our Mission" wrapperStyle={{ margin: 20 }}>
      <Text style={{ margin: 10 }}>
        We present a curated database of the best campsites in the vast woods
        and backcountry of the World Wide Web Wilderness. We increase access to
        adventure for the public while promoting safe and respectful use of
        resources. The expert wilderness trekkers on our staff personally verify
        each campsite to make sure that they are up to our standards. We also
        present a platform for campers to share reviews on campsites they have
        visited with each other.
      </Text>
    </Card>
  );
}

export default class Contact extends Component {
  static navigationOptions = {
    title: "About Us",
  };

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{ source: {url: baseUrl + item.image} }}
        />
      );
    };

    return (
      <ScrollView>
        <Mission />
        <Card title="Community Partners">
          <FlatList
            data={this.props.partners.partners}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPartner}
          />
        </Card>
      </ScrollView>
    );
  }
}

export default connect(mapStateToProps)(About);