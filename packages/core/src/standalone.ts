import { declareAction } from './declareAction'
import {
  combine,
  declareAtom,
  getDepsShape,
  getState,
  initAction,
  map,
} from './declareAtom'
import { createStore } from './createStore'
import {
  getTree,
  getIsAtom,
  getIsAction,
  nameToIdDefault,
  setNameToId,
  noop,
} from './shared'

// eslint-disable-next-line
(window as any)['reatom'] = {
  createStore,
  declareAction,
  combine,
  declareAtom,
  getDepsShape,
  getState,
  initAction,
  map,
  getTree,
  getIsAtom,
  getIsAction,
  nameToIdDefault,
  setNameToId,
  noop,
}

// eslint-disable-next-line
declare interface api {
  dispatch: ''
  createStore: ''
  declareAction: ''
  combine: ''
  declareAtom: ''
  getDepsShape: ''
  getState: ''
  initAction: ''
  map: ''
  getTree: ''
  getIsAtom: ''
  getIsAction: ''
  nameToIdDefault: ''
  setNameToId: ''
  noop: ''
}
