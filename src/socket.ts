import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Auth from './auth';
import Logger from './logger';

class Socket extends Logger {

	/**
	 * Http Client
	 */
	private httpClient: AxiosInstance;

	/**
	 * Http Client Default Config
	 */
	private httpClientDefaultConfig: AxiosRequestConfig = {
		timeout: 10000,
	};

	/**
	 * Constructor
	 *
	 * @param baseURL
	 * @param auth
	 */
	constructor(baseURL: string, auth: Auth) {
		super();

		this.httpClient = axios.create(
			Object.assign({}, this.httpClientDefaultConfig, { baseURL, auth })
		);
	}

	/**
	 * Make Json Request
	 *
	 * @param channels
	 * @param event
	 * @param data
	 * @returns
	 */
	private makeJsonRequest(channels: string | string[], event: string, data?: any): any
	{
		if (typeof channels === 'string') {
			channels = [channels];
		}

		return {
			channels,
			event,
			data,
		};
	}

	/**
	 * Trigger an event by providing event name and payload.
	 * Optionally provide a socket ID to exclude a client (most likely the sender).
	 *
	 * @param channels
	 * @param event
	 * @param data
	 * @param config
	 * @returns
	 */
	public trigger(channels: string | string[], event: string, data?: any, config?: AxiosRequestConfig<any> | undefined): Promise<AxiosResponse<any, any>> {
		this.log('Botika Socket Trigger', this.makeJsonRequest(channels, event, data));

		return this.httpClient.post('/events', this.makeJsonRequest(channels, event, data), {
			headers: {'Content-Type': 'application/json'},
			...config,
		});
	}
}

export { Socket, Auth, Socket as default };
