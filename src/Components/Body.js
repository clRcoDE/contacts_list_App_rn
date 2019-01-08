import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  Dimensions,
  Alert,
  Button
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

export default class Body extends Component {

    constructor(props){

        super(props);
        this.state={
            datasource:[]
        }
    }
    componentDidMount(){
        
        fetch("https://randomuser.me/api/?results=15")
        .then(response => response.json())
        .then(data => {
        //   let profileEmail = data.results.email;
        //   Alert.alert("fetch response is", profileEmail);
        this.setState ({ datasource: data.results})
        })
        .catch(error => Alert.alert("oops no connection"));

    }
//   fetchRandomUser = () => {
//     fetch("https://randomuser.me/api/")
//       .then(response => response.json())
//       .then(data => {
//         let profileEmail = data.results[0].email;
//         Alert.alert("fetch response is", profileEmail);
//       })
//       .catch(error => Alert.alert("oops no connection"));
//   };
  flatlistHeaderComponent = () => {
    return (
      <View style={styles.flatlistHeaderStyle}>
        <View style={styles.textInputWrapper}>
          <Image source={require("../Assets/Images/search.png")} />
          <TextInput
            style={styles.searchBox}
            placeholder={"Search by names and numbers"}
            editable={true}
            maxLength={24}
          />
        </View>
        <Text style={{ marginHorizontal: 20, marginTop: 14, color: "#aaa" }}>
          Send ticket to :
        </Text>
        {/* <Button title="go fetching" onPress={this.fetchRandomUser} /> */}
      </View>
    );
  };

  flatlistSeperator = () => {
    return (
      <View style={[{ justifyContent: "center", alignItems: "center" }]}>
        <View style={styles.seperatorStyle} />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.flatlistWrapper}>
          <FlatList
            data={this.state.datasource}
            ItemSeparatorComponent={this.flatlistSeperator}
            ListHeaderComponent={this.flatlistHeaderComponent}
            keyExtractor={item => item.phone}
            renderItem={({ item }) => {
              return (
                // <View><Text>{item.phone}</Text></View>
                <View style={styles.contactsCard}>
                  <View style={styles.cardPhotoWrapper}>
                    <Image
                      source={require('../Assets/Images/5.png')}
                      style={styles.thumbnailStyles}
                    />
                  </View>
                  <View style={styles.contactInfo}>
                    <Text style={styles.nameStyler}>{item.name.first}</Text>
                    <Text style={styles.lastStyler}>{item.name.last}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 8
    // backgroundColor: "red"
  },
  flatlistWrapper: {
    flex: 1
    // backgroundColor: "#ddd"
  },
  flatlistHeaderStyle: {
    height: 100,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginHorizontal: 8
  },
  searchBox: {
    marginHorizontal: 10
  },
  contactsCard: {
    height: 75,
    color: "#444",
    // borderColor:'#11d',
    // borderWidth:3,
    flexDirection: "row",
    alignItems: "center"
  },
  cardPhotoWrapper: {
    width: 60,
    // backgroundColor: "yellowgreen",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    marginLeft: 45,
    elevation: 10,
    borderRadius: 50
  },
  thumbnailStyles: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff"
  },
  contactInfo: {
    // flex: 1,
    borderColor: "purple",
    borderWidth: 2,
    marginRight: 25
  },
  nameStyler: {
    color: "#333",
    fontSize: 20,
    fontWeight: "600"
  },
  lastStyler: {
    color: "#999",
    fontSize: 11
  },
  textInputWrapper: {
    flexDirection: "row",
    //   justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#eee",
    borderRadius: 50,
    paddingLeft: 12,
    borderColor: "#ccc",
    borderWidth: 2,
    height: 42,
    marginTop: 10
  },
  seperatorStyle: {
    height: 2,
    backgroundColor: "#eee",
    width: deviceWidth * (85 / 100)
  }
});
