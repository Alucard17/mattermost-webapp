// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';

import FormattedMarkdownMessage from 'components/formatted_markdown_message';

import CloudTable from '../widgets/cloud_table';

import statusLegend from '../widgets/status_legend';

const downloadLogLink = (url: string) => (
    <a
        target='_new'
        rel='noopener noreferrer'
        href={url}
        className='download_log'
    >
        <FormattedMessage
            id='admin.cloud.migrate.downloadLog'
            defaultMessage='Download Log'
        />
    </a>
);

const header = [
    <FormattedMessage
        id='admin.cloud.migrate.type'
        defaultMessage='Import Type'
    />,
    <FormattedMessage
        id='admin.cloud.migrate.date'
        defaultMessage='Date'
    />,
    <FormattedMessage
        id='admin.cloud.migrate.channels'
        defaultMessage='Channels'
    />,
    <FormattedMessage
        id='admin.cloud.migrate.users'
        defaultMessage='Users'
    />,
    <FormattedMessage
        id='admin.cloud.migrate.status'
        defaultMessage='Status'
    />,
    <FormattedMessage
        id='admin.cloud.migrate.log'
        defaultMessage='Log'
    />,
];

const list = (importListData: any) => importListData.map((importElement: any) => {
    const chatService = importElement.type;
    return [
            <FormattedMarkdownMessage
                id='admin.cloud.migrate.tableType'
                defaultMessage='{chatService} Import'
                values={{
                    chatService,
                }}
            />,
            <FormattedDate
                value={new Date(importElement.period_start)}
                month='2-digit'
                day='2-digit'
                year='numeric'
                timeZone='UTC'
            />,
                importElement.channels,
                importElement.users,
                statusLegend(importElement.status),
                downloadLogLink(importElement.log),
    ];
});

const importsListTable = (importListData: any) => {
    const list1 = list(importListData);
    return (
        <CloudTable
            header={header}
            list={list1}
        />
    );
};

export default importsListTable;
