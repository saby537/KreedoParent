import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import GUDropDownSubLevelStyles from './GUDropDownSubLevel.Styles';

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
						{!showDrop && (
							<Image
								source={require('../../assets/left-triangle-arrow.png')}
								style={GUDropDownSubLevelStyles.arrowIcon}
								resizeMode="contain"
							/>
						)}
						{showDrop && (
							<Image
								source={require('../../assets/down-triangle-icon.png')}
								style={GUDropDownSubLevelStyles.arrowIcon}
								resizeMode="contain"
							/>
						)}
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
