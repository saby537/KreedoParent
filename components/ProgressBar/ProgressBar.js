import React from 'react';
import { View } from 'react-native';
import Color from '../../utils/Color';
import ProgressBarStyles from './ProgressBar.Styles';
const ProgressBar = ({ complete }) => {
	return (
		<View style={ProgressBarStyles.mainContainer}>
			{complete != 'null' && (
				<View style={ProgressBarStyles.outerProgress}>
					<View
						style={[
							ProgressBarStyles.innerProgress,
							{
								width: `${complete}%`,
								backgroundColor: `${
									complete === '100' ? Color.BORDER_GREEN : Color.PINK
								}`,
							},
						]}
					/>
				</View>
			)}
		</View>
	);
};
export default ProgressBar;
