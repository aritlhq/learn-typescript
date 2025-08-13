/*
Custom Validation
 */

import type {IssueData} from "zod";

export declare type RefinementCtx = {
    addIssue: (arg: IssueData) => void;
    path: (string | number)[];
}