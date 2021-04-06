import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import GUDropDownSubLevelStyles from './GUDropDownSubLevel.Styles';
import DetailsDrop from '../../assets/ParentCorner/Game report_Details_Inside_drop down_Icon_closed.svg';
import DetailsHide from '../../assets/ParentCorner/Game report_Details_Inside_drop down_Icon_open.svg';

const GUDropDownSubLevel = ({ attempt }) => {
	const [showDrop, setShowDrop] = useState(false);
	return (
		<View style={GUDropDownSubLevelStyles.dropDownMainContainer}>
			<View style={GUDropDownSubLevelStyles.attemptHeader}>
				<View
					style={[
						GUDropDownSubLevelStyles.attemptCol1,
						GUDropDownSubLevelStyles.attemptCol,
					]}
				>
					<Text style={{ fontWeight: 'bold' }}>- Attempt: {attempt.ind}</Text>
				</View>
				<View
					style={[
						GUDropDownSubLevelStyles.attemptCol2,
						GUDropDownSubLevelStyles.attemptCol,
					]}
				>
					<Text>Time Taken:{attempt.timeTaken}</Text>
				</View>
				<View
					style={[
						GUDropDownSubLevelStyles.attemptCol3,
						GUDropDownSubLevelStyles.attemptCol,
					]}
				>
					<Text>Date Completed: {attempt.dateCompleted}</Text>
					<TouchableOpacity
						style={GUDropDownSubLevelStyles.touchableContainer}
						onPress={() => setShowDrop((prev) => !prev)}
					>
						{!showDrop && <DetailsDrop width={'100%'} height={'100%'} />}
						{showDrop && <DetailsHide width={'100%'} height={'100%'} />}
					</TouchableOpacity>
				</View>
			</View>
			{showDrop &&
				attempt.levels.map((lvl, id) => (
					<View style={GUDropDownSubLevelStyles.levelEntry} key={id}>
						<View
							style={[
								GUDropDownSubLevelStyles.attemptCol1,
								GUDropDownSubLevelStyles.levelCol,
							]}
						>
							<Text>- Level {lvl.level}</Text>
						</View>
						<View
							style={[
								GUDropDownSubLevelStyles.attemptCol2,
								GUDropDownSubLevelStyles.levelCol,
							]}
						>
							<Text>Time Taken: {lvl.timeTaken}</Text>
						</View>
						<View
							style={[
								GUDropDownSubLevelStyles.levelCol,
								GUDropDownSubLevelStyles.attemptCol3,
							]}
						>
							<Text>Number of time Completed: {lvl.numCompleted}</Text>
						</View>
					</View>
				))}
		</View>
	);
};

export default GUDropDownSubLevel;
