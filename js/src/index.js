import 'atk4-semantic-ui';

import 'helpers/addParams';

import registerPlugin from './plugin';

// Import our plugins
import spinner from 'plugins/spinner';
import reloadView from 'plugins/reloadView';
import ajaxec from 'plugins/ajaxec';
import createModal from 'plugins/createModal';
import notify from 'plugins/notify';

// Register our plugins
registerPlugin('Spinner', spinner);
registerPlugin('ReloadView', reloadView);
registerPlugin('Ajaxec', ajaxec);
registerPlugin('CreateModal', createModal);
registerPlugin('Notify', notify, true);

