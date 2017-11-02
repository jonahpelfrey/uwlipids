export enum Status {
	Fasting,
	Nonfasting,
	Unsure
}

export interface Patient {

	age: number;
	status: Status;

}