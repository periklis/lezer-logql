import {
    Json,
    Logfmt,
    Unpack,
    Pattern,
    Regexp,
    Ip,
    LabelFormat,
    LineFormat,
    LabelReplace,
    Offset,
    By,
    Without,
    And,
    Or,
    Unless,
    Bool,
    On,
    Ignoring,
    GroupLeft,
    GroupRight,
    Unwrap,
    BytesConv,
    DurationConv,
    DurationSecondsConv,
    Sum,
    Avg,
    Count,
    Max,
    Min,
    Stddev,
    Stdvar,
    Bottomk,
    Topk
} from './parser.terms.js';

const keywordTokens = {
    json: Json,
    logfmt : Logfmt,
    unpack: Unpack,
    pattern : Pattern,
    regexp : Regexp,
    ip : Ip,
    label_format : LabelFormat,
    line_format : LineFormat,
    label_replace: LabelReplace,
    offset: Offset,
    bool: Bool,
    on: On,
    ignoring: Ignoring,
    group_left: GroupLeft,
    group_right: GroupRight,
    unwrap: Unwrap,
    bytes: BytesConv,
    duration: DurationConv,
    duration_seconds: DurationSecondsConv
};

export const specializeIdentifier = (value, stack) => {
    return keywordTokens[value.toLowerCase()] || -1;
};


const contextualKeywordTokens = {
    by: By,
    without: Without,
    and: And,
    or: Or,
    unless: Unless,
    sum: Sum,
    avg: Avg,
    count: Count,
    max: Max,
    min: Min,
    stddev: Stddev,
    stdvar: Stdvar,
    bottomk: Bottomk,
    topk: Topk
};

export const extendIdentifier = (value, stack) => {
    return contextualKeywordTokens[value.toLowerCase()] || -1;
};