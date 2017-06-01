import {
  StackNavigator,
} from 'react-navigation';

import MasterView from '../scenes/masterView';
import DetailView from '../scenes/detailView';

const reactNativeMasterDetail = StackNavigator({
  MasterView: {screen: MasterView},
  DetailView: {screen: DetailView}
});

export default reactNativeMasterDetail;
