import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
		};
	}

	async componentDidMount() {
		await Font.loadAsync({
      'Montserrat-Medium': require('./assets/fonts/Montserrat/Montserrat-Medium.ttf'), // eslint-disable-line global-require
      'Montserrat-Regular': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'), // eslint-disable-line global-require
    });
		this.setState({ loaded: true });
	}

	render() {
    console.warn('this.state.loaded', this.state.loaded);
    if (!this.state.loaded) {
      return <AppLoading />;
    }

  	return (
	    <View style={styles.container}>
	      <TextInput
	        autoCapitalize="none"
	        placeholder="Placeholder"
	        placeholderTextColor="#B3A49A"
	        style={styles.input}
	      />
	      <TextInput
	        secureTextEntry
	        autoCapitalize="none"
	        placeholder="Placeholder secure"
	        placeholderTextColor="#B3A49A"
	        style={styles.input}
	      />
	      <View style={{marginVertical: 10}} />
	      <TextInput
	        autoCapitalize="none"
	        placeholder="Placeholder regular"
	        placeholderTextColor="#B3A49A"
	        style={styles.inputRegular}
	      />
	      <TextInput
	        secureTextEntry
	        autoCapitalize="none"
	        placeholder="Placeholder regular secure"
	        placeholderTextColor="#B3A49A"
	        style={styles.inputRegular}
	      />
	      <View style={{marginVertical: 10}} />
	      <TextInput
	        autoCapitalize="none"
	        placeholder="Placeholder medium"
	        placeholderTextColor="#B3A49A"
	        style={styles.inputMedium}
	      />
	      <TextInput
	        secureTextEntry
	        autoCapitalize="none"
	        placeholder="Placeholder medium secure"
	        placeholderTextColor="#B3A49A"
	        style={styles.inputMedium}
	      />
	    </View>
	  );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  input: {
    color: '#48423E',
    fontSize: 16,
  },
  inputRegular: {
    color: '#48423E',
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
  },
  inputMedium: {
    color: '#48423E',
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
  },
});
