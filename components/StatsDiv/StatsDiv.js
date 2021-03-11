import React from 'react';
import { View, Text } from 'react-native';
import AnimatedProgressWheel from '../ProgressCircle/AnimatedProgressWheel';
import StatsDivStyles from './StatsDiv.Styles';
import Color from '../../utils/Color';
const StatsDiv = ({ title, value, percent }) => {
	return (
		<View style={StatsDivStyles.statContainer}>
			<View style={StatsDivStyles.titleContainer}>
				<Text style={StatsDivStyles.title}>{title}</Text>
			</View>
			<View style={StatsDivStyles.zRotate}>
				<AnimatedProgressWheel
					progress={100 - percent}
					animateFromValue={270}
					duration={0}
					size={100}
					width={7}
					color={Color.SKY_BLUE}
					backgroundColor={Color.DARK_BLUE}
				/>
			</View>
			<View style={StatsDivStyles.statValueContainer}>
				<Text style={StatsDivStyles.statValue}>{value}</Text>
			</View>
		</View>
	);
};

export default StatsDiv;
