import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import HeaderStyles from './Header.Styles';

const Images = [
	require('../../assets/bell-icon-header.png'),
	require('../../assets/progress_report_icon.png'),
	require('../../assets/qA-icon-header.png'),
	require('../../assets/setting-icon-header.png'),
	require('../../assets/book-tick-icon-header.png'),
	require('../../assets/person-info-icon-header.png'),
	require('../../assets/share-icon-header.png'),
	require('../../assets/about-icon-header.png'),
];
const PageIndex = [
	'Report',
	'Report',
	'Report',
	'Report',
	'Report',
	'Report',
	'Report',
	'Report',
];
export default function HeaderIcon({ index, active, onClickHandler }) {
	return (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => onClickHandler(PageIndex[index])}
			style={[
				HeaderStyles.touchableContainer,
				active ? HeaderStyles.activeTouchable : '',
			]}
		>
			<View
				style={[
					HeaderStyles.iconContainer,
					active ? HeaderStyles.activeIcon : '',
				]}
			>
				<Image
					source={Images[index]}
					style={HeaderStyles.icon}
					resizeMode="contain"
				/>
			</View>
			{active && (
				<View style={HeaderStyles.arrowContainer}>
					<Image
						source={require('../../assets/right-white-triangle-arrow-transparent.png')}
						style={HeaderStyles.icon}
						resizeMode="contain"
					/>
				</View>
			)}
		</TouchableOpacity>
	);
}
