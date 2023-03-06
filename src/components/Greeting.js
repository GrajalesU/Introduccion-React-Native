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

Greeting.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};
