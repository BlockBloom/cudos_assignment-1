/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.

34:42
*/

export type Addr = string;
export interface Config {
  greeting: string;
  owner: Addr;
  [k: string]: unknown;
}
export type ExecuteMsg = {
  reply: {
    text: string;
    [k: string]: unknown;
  };
} | {
  reset: {
    text: string;
    [k: string]: unknown;
  };
};
export interface InstantiateMsg {
  greeting: string;
  [k: string]: unknown;
}
export type QueryMsg = {
  get_replies: {
    [k: string]: unknown;
  };
};
export interface Reply {
  text: string;
  [k: string]: unknown;
}