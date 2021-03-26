import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import Color from '../../utils/Color';
import GameCompletionReportHeader from '../../components/GameCompletionReportHeader/GameCompletionReportHeader';
import GameCompletionReportTableHeader from '../../components/GameCompletionReportTableHeader/GameCompletionReportTableHeader';
import GameCompletionReportTableEntry from '../../components/GameCompletionReportTableEntry/GameCompletionReportTableEntry';
import GameCompletionReportStyles from './GameCompletionReport.Styles';
import GameCompletionData from './GameCompletionData';
const GameCompletionReport = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header navigation={navigation} />
			<View style={GameCompletionReportStyles.mainContainer}>
				<GameCompletionReportHeader />
				<View style={GameCompletionReportStyles.tableContainer}>
					<GameCompletionReportTableHeader />
					<ScrollView>
						{GameCompletionData.map((data) => (
							<GameCompletionReportTableEntry key={data.name} data={data} />
						))}
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height: '100%',
		backgroundColor: Color.SKY_BLUE,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default GameCompletionReport;
