import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReportPage from './Pages/ReportPage/ReportPage';
export default function Header() {
	return (
		<View style={styles.container}>
			<ReportPage />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
