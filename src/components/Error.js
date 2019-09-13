import React, {Fragment} from 'react';
import { Text, StyleSheet } from 'react-native';

export const Error = ({message}) => {
  return (
    <Fragment>
      <Text style={styles.error}>{message}</Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  error: {
    alignSelf: 'center',
    fontSize: 16,
    flex: 10
  }
});

export default Error;
