import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import NameTagStyles from './NameTag.Styles';

const NameTag = (props) => {
	return (
		<TouchableOpacity onPress={props.onClick}>
			<View style={NameTagStyles.nameContainer}>
				<View
					style={[
						NameTagStyles.nameIconContainer,
						props.active ? NameTagStyles.active : NameTagStyles.passive,
					]}
				>
					<Image
						source={require('../../assets/person-male-icon.png')}
						style={NameTagStyles.nameIcon}
						resizeMode="contain"
					/>
				</View>
				<View
					style={[
						NameTagStyles.nameDetailContainer,
						props.active
							? NameTagStyles.detailActive
							: NameTagStyles.detailPassive,
					]}
				>
					<Text
						style={[
							NameTagStyles.nameDetail,
							props.active
								? NameTagStyles.detailActive
								: NameTagStyles.detailPassive,
						]}
					>
						{props.name}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default NameTag;
