import { View, Text } from "react-native";
import React from "react";
import PropTypes from "prop-types";

export default function Greeting({ firstName, lastName }) {
  return (
    <View>
      <Text>
        Hello {firstName} {lastName}
      </Text>
    </View>
  );
}

Greeting.defaultProps = {
  lastName: ":)",
};

Greeting.PropTypes = {
  fistName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};
