import { Logger as LoggerInterface } from 'ts-log';

class Logger {
	/**
     * The logger instance.
     */
	protected logger: any;

	/**
	 * Sets a logger.
	 *
	 * @param logger
	 */
	public setLogger(logger: LoggerInterface): void
	{
		this.logger = logger;
	}

	/**
	 * Logging
	 *
	 * @param message
	 * @param optionalParams
	 * @returns
	 */
	protected log(message?: any, ...optionalParams: any[]): void
	{
		if (this.logger) {
			this.logger.info(message, optionalParams);
		}
	}
}

export default Logger;
