import {match, StaticContext } from 'react-router';
import { History, Location } from 'history';


export interface ReactRouterProp {history: History<any>, location: Location<any>, match: match<any>, staticContext?: StaticContext | undefined}
