import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black', // shadow* is for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2, // bottom border shadow for android
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};


export { Header };
