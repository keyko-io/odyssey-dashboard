import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog as RNPDialog, Portal } from 'react-native-paper';

export const Dialog = (props) => {
  const { title, paragraph } = props
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <View>
      <Button onPress={showDialog}>Show Dialog</Button>
      <Portal>
        <RNPDialog style={styles.whiteBackground} visible={visible} onDismiss={hideDialog}>
          <RNPDialog.Title style={[styles.blackText, styles.font24]}>{title}</RNPDialog.Title>
          <RNPDialog.Content>
            <Paragraph style={[styles.blackText, styles.font18]}>{paragraph}</Paragraph>
          </RNPDialog.Content>
          <RNPDialog.Actions>
            <Button color="black" onPress={hideDialog}>Yes</Button>
            <Button color="black" onPress={hideDialog}>No</Button>
          </RNPDialog.Actions>
        </RNPDialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  whiteBackground: {
    backgroundColor: 'white'
  },
  blackText: {
    color: 'black'
  },
  font24: {
    fontSize: 24
  },
  font18: {
    fontSize: 18
  }
})