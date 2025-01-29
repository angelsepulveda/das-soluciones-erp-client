import BaseService from '../baseService.ts';
import { TModuleDto, TRegisterModulePayload } from '../../models';

export enum modulesEndpoint {
	modules = 'modules',
}

export const getAllModule = async (): Promise<TModuleDto[]> => {
	const apiService = new BaseService();
	const response = await apiService.get(modulesEndpoint.modules);
	return response as TModuleDto[];
};

export const registerModule = async (
	payload: TRegisterModulePayload,
): Promise<void> => {
	const apiService = new BaseService();
	await apiService.post<TRegisterModulePayload>(
		modulesEndpoint.modules,
		payload,
	);
};
