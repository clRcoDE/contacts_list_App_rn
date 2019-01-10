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
  Button,TouchableHighlight
} from "react-native";



const deviceWidth = Dimensions.get("window").width;

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: [],
      seed: 1,
      // isLoading: true,
      isRefreshing: false,
      selectedContact: null

    };
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    let { seed } = this.state;
    // this.setState({ isLoading: true });

    fetch(`https://randomuser.me/api/?results=20`)
      .then(res => res.json())
      .then(resdata => {
        this.data = resdata.results;
        this.setState({
          filteredData: this.data,
          isRefreshing: false
        });
      })
      .catch(error => alert("cannot find server"));
  };



  handleRefresh=()=>{
    // this.setState((prev,props)=>({seed:prev.seed+1,isRefreshing:true}), ()=>{Alert.alert('yoohoo')} )
    this.setState({
      seed: this.state.seed + 1,
      isRefreshing:true
    } , ()=>{ this.loadUsers();});
  };

  serachfilterfunction = text => {
    let result = this.data.filter(contact =>
      `${contact.name.first.toUpperCase()} ${contact.name.last.toUpperCase()}`.contains(text.toUpperCase())
    );
    this.setState({
      filteredData: result
    });
  };

  // fetch("https://randomuser.me/api/")
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
            maxLength={40}
            onChangeText={this.serachfilterfunction}
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
            data={this.state.filteredData}
            ItemSeparatorComponent={this.flatlistSeperator}
            ListHeaderComponent={this.flatlistHeaderComponent}
            keyExtractor={item => item.email}
            
            extraData={this.state.selectedContact}
            
            renderItem={({ item }) => {
              return (
                // <View><Text>{item.phone}</Text></View>
                <TouchableHighlight style={{height:75,marginHorizontal:20,borderRadius:8}} onPress={()=>{
                  
                  this.setState({
                    selectedContact: item.email
                  })
                }} 
                underlayColor='rgba(100,100,100,0.05)'
                >
                <View style={this.state.selectedContact === item.email ? styles.contactsCardSelected:styles.contactsCard}>

                <View style={{width:18,height:18,marginLeft:5}}>
                {this.state.selectedContact === item.email ?<Image source={require('../Assets/Images/star.png')}/>:<Image source={require('../Assets/Images/square.png')}/>}
                </View>
                  <View style={this.state.selectedContact === item.email ? styles.cardPhotoWrapperSelected:styles.cardPhotoWrapper}>
                    <Image
                      source={{ uri: item.picture.medium }}
                      style={styles.thumbnailStyles}
                    />
                  </View>
                  <View style={styles.contactInfo}>
                    <Text style={styles.nameStyler}>
                      {item.name.first} , {item.name.last}
                    </Text>
                    <Text style={styles.lastStyler}>+{item.phone}</Text>
                  </View>
                </View>
                </TouchableHighlight>
              );
            }}
            // refreshing={this.isRefreshing}
            refreshing={false}
            onRefresh={this.handleRefresh}
            // refreshing={false}
            // onRefresh={this.handleRefresh}
            // onEndReached={this.handleLoadMore}
            // onEndThreshold={15}
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
    flex: 1,
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
    borderColor:'#11d',
    // borderWidth:3,
    flexDirection: "row",
    alignItems: "center"
  },
  contactsCardSelected: {
    height: 74,
    color: "#444",
    borderColor:'#2aa0f9',
    borderWidth:3,
    flexDirection: "row",
    alignItems: "center",
    borderRadius:8,
  },
  cardPhotoWrapper: {
    width: 60,
    height:60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 20,
    elevation:20,
    padding:6,
    borderRadius: 50
  },
  cardPhotoWrapperSelected:{
    width: 60,
    height:60,
    backgroundColor: "#2aa0f9",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 20,
    elevation:20,
    padding:8,
    borderRadius: 50
  },
  thumbnailStyles: {
    width: 54,
    height: 54,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff"
  },
  thumbnailStylesSelected:{
    width: 55,
    height: 55,
    borderRadius: 50,
    borderWidth: 4,
    // padding: 8,
    borderColor: "#5577cc"

  },
  contactInfo: {
    // flex: 1,
    borderColor: "purple",
    // borderWidth: 2,
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
    width: deviceWidth * (90 / 100)
  }
});

