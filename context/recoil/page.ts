import { RecoilState, atom } from 'recoil';

export type Page = 'LANDING' | 'EXPERIENCES' | 'PROJECTS';

export const pageState: RecoilState<Page> = atom({
	key: 'page',
	default: 'LANDING' as Page,
});
