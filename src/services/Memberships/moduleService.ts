import BaseService from '../baseService.ts';
import { TModuleDto } from '../../models';

export enum modulesEndpoint {
	getAll = 'modules',
	register = 'modules',
}

export const getAll = async (): Promise<TModuleDto[]> => {
	const apiService = new BaseService();
	const response = await apiService.get(modulesEndpoint.getAll);
	return response as TModuleDto[];
};
