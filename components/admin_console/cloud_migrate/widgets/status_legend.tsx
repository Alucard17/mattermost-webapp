// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import {FormattedMessage} from 'react-intl';
import './status_legend.scss';

const statusLegend = (status: string) => {
    switch (status) {
    case 'failed':
        return (
            <div className='StatusLegend failed'>
                <i className='icon icon-alert-outline'/>
                <FormattedMessage
                    id='admin.general.failed'
                    defaultMessage='Failed'
                />
            </div>
        );
    case 'completed':
        return (
            <div className='StatusLegend completed'>
                <i className='icon icon-check-circle-outline'/>
                <FormattedMessage
                    id='admin.general.completed'
                    defaultMessage='Completed'
                />
            </div>
        );
    default:
        return (
            <div className='StatusLegend in_progress'>
                <i className='icon fa fa-refresh fa-spin'/>
                <FormattedMessage
                    id='admin.general.inProgress'
                    defaultMessage='In Progress'
                />
            </div>
        );
    }
};

export default statusLegend;
