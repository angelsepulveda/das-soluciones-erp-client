interface RequestOptions {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: Record<string, string>;
	body?: any;
}

class BaseService {
	private readonly baseURL: string;
	private readonly defaultHeaders: Record<string, string>;

	constructor() {
		this.baseURL = 'https://localhost:7224/api/';
		this.defaultHeaders = {
			'Content-Type': 'application/json',
		};
	}

	// Set custom headers, such as authorization tokens
	setToken(token: string): void {
		this.defaultHeaders['Authorization'] = `Bearer ${token}`;
	}

	// Generic request method
	async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
		const { method = 'GET', headers = {}, body } = options;
		const url = `${this.baseURL}${endpoint}`;
		const config: RequestInit = {
			method,
			headers: { ...this.defaultHeaders, ...headers },
		};

		if (body) {
			config.body = JSON.stringify(body);
		}

		try {
			const response = await fetch(url, config);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			if (response.status === 201) return {} as Promise<T>;

			if (response.status === 200 && method == 'DELETE')
				return {} as Promise<T>;

			return response.json() as Promise<T>;
		} catch (error) {
			console.error('Request failed:', error);
			throw error;
		}
	}

	// GET method
	get<T>(endpoint: string, headers: Record<string, string> = {}): Promise<T> {
		return this.request<T>(endpoint, { method: 'GET', headers });
	}

	// POST method
	async post<T>(
		endpoint: string,
		body: any,
		headers: Record<string, string> = {},
	): Promise<void> {
		await this.request<T>(endpoint, { method: 'POST', body, headers });
	}

	// PUT method
	put<T>(
		endpoint: string,
		body: any,
		headers: Record<string, string> = {},
	): Promise<T> {
		return this.request<T>(endpoint, { method: 'PUT', body, headers });
	}

	// DELETE method
	async delete<T>(
		endpoint: string,
		headers: Record<string, string> = {},
	): Promise<void> {
		await this.request<T>(endpoint, { method: 'DELETE', headers });
	}
}

// Usage example
// const apiService = new BaseService();
// apiService.setToken('your-token-here');
// apiService.get('/endpoint').then(response => console.log(response));

export default BaseService;
