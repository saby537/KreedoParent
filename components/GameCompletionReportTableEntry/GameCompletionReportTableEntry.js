import React from 'react';
import { View, Text } from 'react-native';
import GameCompletionReportTableEntryStyles from './GameCompletionReportTableEntry.Styles';
import GameCompletionReportStyles from '../../Pages/GameCompletionReport/GameCompletionReport.Styles';
import ProgressBar from '../ProgressBar/ProgressBar';
const GameCompletionReportTableEntry = ({ data }) => {
	return (
		<View style={GameCompletionReportTableEntryStyles.entryContainer}>
			<Text
				style={[
					GameCompletionReportStyles.col1,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				{data.name}
			</Text>
			<View
				style={[
					GameCompletionReportStyles.col3,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'jan' in data ? data.jan : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col3,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'feb' in data ? data.feb : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col4,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'mar' in data ? data.mar : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col5,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'apr' in data ? data.apr : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col6,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'may' in data ? data.may : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col7,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'jun' in data ? data.jun : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col8,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'jul' in data ? data.jul : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col9,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'aug' in data ? data.aug : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col10,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'sep' in data ? data.sep : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col11,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'oct' in data ? data.oct : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col12,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'nov' in data ? data.nov : null}`} />
			</View>
			<View
				style={[
					GameCompletionReportStyles.col13,
					GameCompletionReportTableEntryStyles.entryColumn,
				]}
			>
				<ProgressBar complete={`${'dec' in data ? data.dec : null}`} />
			</View>
		</View>
	);
};
export default GameCompletionReportTableEntry;
