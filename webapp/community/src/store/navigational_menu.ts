import {types, getEnv} from 'mobx-state-tree';
import {PageStore} from './Page';
export const NavigationalMenuStore = types
    .model('NavigationalMenu', {
        _id: types.identifier,
        name: '',
        sort: types.number,
        icon: types.maybeNull(types.string), 
        url: types.maybeNull(types.string),
        type: types.maybeNull(types.string),
        page: types.maybeNull(PageStore),
        event: types.maybeNull(types.string)
    })
    .views(self => ({}))
    .actions(self => ({}))

export type INavigationalMenuStore = typeof NavigationalMenuStore.Type;
