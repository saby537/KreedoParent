import React from 'react';
import { Image, View, TouchableOpacity, Share } from 'react-native';
import NotificationActive from '../../assets/ParentCorner/Notification_icon_Active.svg';
import StatisticsActive from '../../assets/ParentCorner/Statistics_icon_Active.svg';
import QuestionActive from '../../assets/ParentCorner/Question_icon_Active.svg';
import SettingsActive from '../../assets/ParentCorner/Settings_icon_Active.svg';
import SubscriptionActive from '../../assets/ParentCorner/Subscription_icon_Active.svg';
import ProfileActive from '../../assets/ParentCorner/Profile_icon_Active.svg';
import ShareActive from '../../assets/ParentCorner/Share_icon_Active.svg';
import AboutUsActive from '../../assets/ParentCorner/AboutUS_icon_Active.svg';
import NotificationPassive from '../../assets/ParentCorner/Notification_icon_white.svg';
import StatisticsPassive from '../../assets/ParentCorner/Statistics_icon_white.svg';
import QuestionPassive from '../../assets/ParentCorner/Question_icon_white.svg';
import SettingsPassive from '../../assets/ParentCorner/Settings_icon_white.svg';
import SubscriptionPassive from '../../assets/ParentCorner/Subscription_icon_White.svg';
import ProfilePassive from '../../assets/ParentCorner/Profile_icon_white.svg';
import SharePassive from '../../assets/ParentCorner/Share_icon_White.svg';
import AboutUsPassive from '../../assets/ParentCorner/AboutUS_icon_white.svg';
import HeaderStyles from './Header.Styles';

const activeImages = (index) => {
	switch (index) {
		case 0:
			return <NotificationActive width={'70%'} height={'70%'} />;
		case 1:
			return <StatisticsActive width={'70%'} height={'70%'} />;
		case 2:
			return <QuestionActive width={'70%'} height={'70%'} />;
		case 3:
			return <SettingsActive width={'70%'} height={'70%'} />;
		case 4:
			return <SubscriptionActive width={'70%'} height={'70%'} />;
		case 5:
			return <ProfileActive width={'70%'} height={'70%'} />;
		case 6:
			return <ShareActive width={'70%'} height={'70%'} />;
		case 7:
			return <AboutUsActive width={'70%'} height={'70%'} />;
		default:
			return <NotificationActive width={'70%'} height={'70%'} />;
	}
};
const passiveImages = (index) => {
	switch (index) {
		case 0:
			return <NotificationPassive width={'70%'} height={'70%'} />;
		case 1:
			return <StatisticsPassive width={'70%'} height={'70%'} />;
		case 2:
			return <QuestionPassive width={'70%'} height={'70%'} />;
		case 3:
			return <SettingsPassive width={'70%'} height={'70%'} />;
		case 4:
			return <SubscriptionPassive width={'70%'} height={'70%'} />;
		case 5:
			return <ProfilePassive width={'70%'} height={'70%'} />;
		case 6:
			return <SharePassive width={'70%'} height={'70%'} />;
		case 7:
			return <AboutUsPassive width={'70%'} height={'70%'} />;
		default:
			return <NotificationPassive width={'70%'} height={'70%'} />;
	}
};
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
				{active ? activeImages(index) : passiveImages(index)}
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
