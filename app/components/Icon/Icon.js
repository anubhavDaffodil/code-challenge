/**
 * Icon icon set component.
 * Usage: <Icon name="icon-name" size={20} color="#4F8EF7" />
 */

import createIconSet from 'react-native-vector-icons/lib/create-icon-set';
const glyphMap = {
  "goal": 59649,
  "owngoal": 59649,
  "red_card": 59658,
  "yellow_card": 59666
};

const iconSet = createIconSet(glyphMap, 'icomoon', 'icomoon.ttf');

export default iconSet;

export const Button = iconSet.Button;
export const TabBarItem = iconSet.TabBarItem;
export const TabBarItemIOS = iconSet.TabBarItemIOS;
export const ToolbarAndroid = iconSet.ToolbarAndroid;
export const getImageSource = iconSet.getImageSource;

