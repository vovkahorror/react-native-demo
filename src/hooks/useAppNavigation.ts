import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../types/NavigationTypes';

export const useAppNavigation = () => useNavigation<NavigationUseType>();

type NavigationUseType = NavigationProp<RootStackParamList>;