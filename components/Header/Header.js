import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderIcon from './HeaderIcon';
import HeaderStyles from './Header.Styles';
const Header = ({ navigation }) => {
	const [curIndex, setCurIndex] = useState(1);
	const indArr = [0, 1, 2, 3, 4, 5, 6, 7];
	return (
		<View style={HeaderStyles.mainContainer}>
			{indArr.map((i) => (
				<HeaderIcon
					key={i}
					index={i}
					active={curIndex === i}
					onClickHandler={(page) => {
						setCurIndex(i);
						navigation.navigate({
							routeName: page,
						});
					}}
				/>
			))}
		</View>
	);
};
export default Header;
