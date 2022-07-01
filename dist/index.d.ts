import React from 'react';

declare type TypeForm = "form" | "rate" | "full";
interface IFeedbackWidget {
    user?: string;
    metadata?: object;
    type?: TypeForm;
    apiPath?: string;
    themeColor?: string;
    textColor?: string;
    title?: null | string | React.ReactElement;
    description?: null | string | React.ReactElement;
    showOnInitial?: boolean;
    customIcon?: React.ReactElement;
}
declare function FeedbackWidget({ user, metadata, type, apiPath, themeColor, textColor, title, description, showOnInitial, customIcon, }: IFeedbackWidget): JSX.Element;

export { IFeedbackWidget, TypeForm, FeedbackWidget as default };
